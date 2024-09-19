export default function (plop) {
  // create your generators here
  plop.setGenerator('post', {
    description: 'generate empty post file',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'The title of the post:',
        validate: function (input) {
          if (input.trim() === '') {
            return 'The title is required';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'date',
        message: 'The date of the post (YYYY-MM-DD):',
        default: new Date().toISOString().split('T')[0],
      },
      {
        type: 'input',
        name: 'summary',
        message: 'The summary of the post:',
      },
    ],
    actions: (data) => {
      return [
        {
          type: 'add',
          path: 'src/posts/en/{{kebabCase title}}.mdx',
          templateFile: 'plop-templates/post.mdx.hbs',
        },
        {
          type: 'add',
          path: 'src/posts/zh/{{kebabCase title}}.mdx',
          templateFile: 'plop-templates/post.mdx.hbs',
        },
      ]
    },
  })
}
