---
tag: manual
category: database
show-on-main-page: false
---
## MongoDB Package Components
Mongo database is a document file database.

- mongo -uusername -ppassword "host:port"
- "sudo" mongod "option"
- mongodump
- mongorestore : mongodump and mongostore can be used for backups in a standalone server. There will be some issue when used in shard.
- bsondump : bsondump is a diagnostic tool for inspecting BSON files, not a tool for data ingestion or other application use.bsondump collection.bson > collection.json
- mongoexport : mongoexport is a utility that produces a JSON or CSV export of data stored in a MongoDB instance. The rich BSON will not export and import correctly.
- mongoimport : mongoimport can import the JSON or CSV file.
- mongofiles : used with GridFS
- mongooplog : used for real-time migration
- mongopref : mongopref is a utility to check disk I/O performance independently of Mongo.
- mongos : mongo shard
- mongostat : provides a quick overview of the status of a currency.
- mongotop : mongotop provides a method to track the amount of time a MongoDB instance spends reading and writing data.

## Mongo Shell
- db
- show dbs
- use "dbName"
- help

### insert
- db.myCollection.insert(jsonTypeString)
- db.myCollection.insertOne()
- db.myCollection.insertMany()

#### query
- db.getColleciton("specialDBName").find(query, projection).sort(1/-1).limit(number).pretty()

query: document using query operators.

##### examples:
```json
db.students.find({
    score: { 
        $gt: 0, $lt: 2 
    } 
}) 
```

This statement will return score between 0 and 2

```json
db.bios.find({
    "name.first": "Yukihiro",
    "name.last": "Matsumoto"
}, {
    "name.first": 1
})
```

projection :
 {field1: <value>, field2i: <value>}
The <value> can be the any of the following:
- 1 or true to include the field in the return document
- 2 or false to exclude the field in the return document
- Projection Operators (find on views doesn't support these operators)

#### update
- db.myCollection.update(
     {udpate criteria}
     {update action}
     {update option}
)
- db.myCollection.updateOne()
- db.myCollection.updateMany()
- db.myCollection.replaceOne()

replaceOne will replace all of the specified object. 

criteria is just like the query in find()

action use Update Operators 

##### examples :

``` json
db.inventory.updateOne(
   { item: "paper" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
)
```

#### remove
- db.myCollection.remove()
- db.myCollection.deleteOne()
- db.myCollection.deleteMany()
 
#### mapreduce: map and reduce
- BSON document size : 16MB 
- Nested depth for BSON documents : 100 levels
- Database name case sensitivity
- Linux data name restriction : /\. "$
- Length of dataBase name 64 characters
- Collection name : no $,not empty, contain null, begin with the system. prefix.
- Fields name :no '.',

## [Operators-query](https://docs.mongodb.com/manual/reference/operator/query/)
#### BSON type :
e/eq : equal
g : great
t : than
l : less
n : not
- $eq
- $gt
- $gte
- $lt
- $lte
- $ne
- $in
- $ni

#### logic:
- $or
- $and
- $not
- $nor

#### element:
- $exists
- $type

#### *evaluation*:
- $mod
- $regex
- $text
- $where

*many advanced useage*

#### Array:
- $all

db.articles.find({ tags: {$all: [["ssl", "security"]]}})

matches :
- tags:[["ssl", "security"]]
- tags:["ssl", "security"]

The $all returns the fields contains all the fields. If $all is not used, the result is the document contains one of the values in the array.

- $elemMatch: at least one of the element match the cretirion
- $size: the array's size if the value. range query isn't allowed, use a filed incremented when the array changed instead.

#### Bitwise:
No idea when to use.
I'll figure it out when I need to work in the bit level.

#### Comments:
$comment

#### Projection Operators
I don't understand what's the projection meaning.

## [Operators-Update](https://docs.mongodb.com/manual/reference/operator/update/)
#### Fields
- $inc: Increments the value of the field by the specified amout
- $mul: Multiplies the value of the field by the specified amout
- $rename: Renames a field
- $setOnInsert Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents
- $set Sets the value of a field in a document 
- $unset Removes the specified field from a document
- $min Only updates the field if the specified value is less than the existing field value
- $max Only updates the field if the specified value is greater than the existing field value
- $currentDate Sets the value of a field to current date, either as a Date or a Timestamp

```json
db.users.update(
   { _id: 1 },
   {
     $currentDate: {
        lastModified: true,
        "cancellation.date": { $type: "timestamp" }
     },
     $set: {
        status: "D",
        "cancellation.reason": "user request"
     }
   }
)
{
   "_id" : 1,
   "status" : "D",
   "lastModified" : ISODate("2014-09-17T23:25:56.314Z"),
   "cancellation" : {
      "date" : Timestamp(1410996356, 1),
      "reason" : "user request"
   }
}
```

#### Array
- *$  Acts as a placeholder to update the first element that matches the query condition in an update*
- $addToSet Adds elements to an array only if they do not already exist in the set
- $pop Removes the first or last item of an array.
- $pullAll Removes all matching values from an array.
- $pull Removes all array elements that match a specified query
- $push Adds an item to an array.

```json
{
  _id: 4,
  grades: [
     { grade: 80, mean: 75, std: 8 },
     { grade: 85, mean: 90, std: 5 },
     { grade: 90, mean: 85, std: 3 }
  ]
}

db.students.update(
   {
     _id: 4,
     grades: { $elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 } } }
   },
   { $set: { "grades.$.std" : 6 } }
)

{
  _id: 4,
  grades: [
    { grade: 80, mean: 75, std: 8 },
    { grade: 85, mean: 90, std: 6 },
    { grade: 90, mean: 85, std: 3 }
  ]
}
```


