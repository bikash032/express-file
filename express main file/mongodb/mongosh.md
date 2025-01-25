<<<MONGODB>>>
Mongodb is a non sql database that stores data in a flexiable, json like format called as BSON(Binary JSON). It is documented-oriented, meaning data is stored in document (similar to rows in a relational data base) within collection (similar to tables in relational database)
It is mostly used for the application requireing for the fast and flexable databases, such as real time analytics, content management systems, IoT application and many more.

<<<<<Mongodb shells or mongosh>>>>>
Mongodb shell or mongosh is the interactive command-line interface(cli) for Mongodb. 
 As it is used for the connection of the mongodb database to perform database operations like CRUD(create, read, update, delete) 
 also use for run queries, create  indexes and use the aggregrate framework.


 <<<<<MongoDB compass>>>>>
 It is of the GUI for the mongoDB that allows users to interect with their database visually insted of through a CLI. It's perfect for the users who performs a more intuitive approach to managing database.


 it will create and runs queries without using of the CLI 

<<<<<<<<summery of the use above all of them as when to use what>>>>>>>>
 MongoDB	Storing and managing your data in a flexible, NoSQL environment.
Mongosh	For command-line users who want direct control and scripting capabilities for managing databases.
MongoDB Compass	For users who prefer a graphical interface to visually explore, query, and analyze their data.

lets start for the basic operation for the CRUD operation. 
CREATE THE FUNCTION
  for this we need to use the insertation function as indicating of the creating of the database 

  1. run mongosh in terminal of the power shell
  2. As we can clear any unwanted file by the help of the CLS command in the powershell.
  3. use inventory(database name) ==> it will create the data base name
  4. db.inventory.insertOne({key:"value",key1:"value2"})==> this will insert json data as an object for the database as of the single line data
     <db.inventory.insertMany({key:"value",key1:"value1"},{key3:"value",key4:"value"})==>This will insert array of the object for the database
     <db.inventory.insertBulk()

        before this lets us discuss about the operators we using for the writing of the queries in the mongosh / mongodb
        {
            key:value,
            key1:value1
        }

        comparing with sql
        where key=value and key1=value1

        {
           key: {$operator"value"},
           key1:{$operator"value1"}    
        }

        where key $operation "value" and key1 $operation "value1"

        {
            $operation:{key:"value"},
            $operation:{key1:"value1}
        }

      1. Query Operators (Used to filter documents in queries)
      
$eq: Matches values that are equal to a specified value.
(e.g., { age: { $eq: 25 } })

$ne: Matches values that are not equal to a specified value.
(e.g., { age: { $ne: 25 } })

$gt: Matches values greater than a specified value.
(e.g., { age: { $gt: 25 } })

$gte: Matches values greater than or equal to a specified value.
(e.g., { age: { $gte: 25 } })

$lt: Matches values less than a specified value.
(e.g., { age: { $lt: 25 } })

$lte: Matches values less than or equal to a specified value.
(e.g., { age: { $lte: 25 } })

$in: Matches any of the values specified in an array.
(e.g., { age: { $in: [25, 30, 35] } })

$nin: Matches none of the values specified in an array.
(e.g., { age: { $nin: [25, 30, 35] } })



2. Logical Operators (Combine query clauses)

$and: Combines multiple queries and returns documents that match all conditions.
(e.g., { $and: [ { age: { $gte: 18 } }, { status: "active" } ] })

$or: Combines multiple queries and returns documents that match at least one condition.
(e.g., { $or: [ { age: { $lt: 18 } }, { status: "inactive" } ] })

$not: Inverts the effect of a query.
(e.g., { age: { $not: { $gt: 18 } } })

$nor: Matches documents that fail to match both or all conditions.
(e.g., { $nor: [ { age: { $lt: 18 } }, { status: "active" } ] })



3. Element Operators (Test the presence of fields)

$exists: Matches documents that have (or don't have) a specific field.
(e.g., { email: { $exists: true } })

$type: Matches documents where the field is of a specific BSON type.
(e.g., { age: { $type: "int" } })



4. Evaluation Operators (Perform evaluations)

$regex: Matches documents based on regular expressions.
(e.g., { name: { $regex: /^J/ } })

$expr: Allows using aggregation expressions in queries.
(e.g., { $expr: { $gt: ["$sales", "$target"] } })


$mod: Matches documents where the field value is divisible by a number.
(e.g., { age: { $mod: [2, 0] } })

$text: Performs a text search on indexed fields.
(e.g., { $text: { $search: "MongoDB" } })



5. Array Operators (Work with arrays)

$all: Matches documents where an array contains all specified elements.
(e.g., { tags: { $all: ["mongodb", "database"] } })

$elemMatch: Matches documents with at least one array element satisfying all specified conditions.
(e.g., { scores: { $elemMatch: { $gte: 80, $lt: 90 } } })

$size: Matches arrays with a specific number of elements.
(e.g., { tags: { $size: 3 } })


6. Update Operators (Modify documents)
$set: Sets the value of a field in a document.
(e.g., { $set: { age: 30 } })

$unset: Removes a field from a document.
(e.g., { $unset: { status: "" } })

$inc: Increments a field by a specified value.
(e.g., { $inc: { views: 1 } })

$push: Adds an element to an array.
(e.g., { $push: { tags: "new" } })

$pull: Removes elements from an array that match a condition.
(e.g., { $pull: { tags: "old" } })

$addToSet: Adds an element to an array only if it doesn’t already exist.
(e.g., { $addToSet: { tags: "unique" } })



7. Aggregation Pipeline Operators (Used in aggregations)

$match: Filters documents to pass to the next pipeline stage.
(e.g., { $match: { status: "active" } })

$group: Groups documents by a specified key and performs aggregations.
(e.g., { $group: { _id: "$status", total: { $sum: 1 } } })

$sort: Sorts documents.
(e.g., { $sort: { age: 1 } })

$project: Specifies fields to include or exclude in the result.
(e.g., { $project: { name: 1, age: 1 } })


<<<<<<<<<<<<<To find or Read data of the object>>>>>>>>>>>>>

<db.inventory.find({},{email:1,name:1}) ==> as 1 indicates true not quantaty

as this will reture all the name and email value of the object type along with the _id: objectId:(jaohdfuihasd45d5fa
s4)
    So for this if we do not need to use the id then we can decleare the id as false
<db.inventory.find({},{name:1,email:1,_id:0})==> as here 0 and 1 are declearing as the boolean return as like of the true or false


if we need to use id to find all of the data for the query then we need to use _id:objectId:(jfgsd6s464654sdgf4s4df4v4sv4)
<db.inventory.find({_id:objectId("sdf45dfa45fad5fda4c4")});
the abve query will give us the array of the object for them. we know that id for any of the user or the object are unique so, for this when we 
implemeting the concept then we can transfer that array of data into object data only. so for this we can use this below concept

<db.inventory.findOne({_id:objectId("gf5gfd5v64c1vff1v)})
  As this will return object of the data not array 
  but to use this we need to make sure as the data mustnt need by us for the array of the object

  <<<<<<<<<UPDATE FUNCTION >>>>>>>>>

  if we need to update the data from the database then we can use the following command in the command prompt of the mongosh shell

  <db.inventory.updateOne({_id: ObjectId('679112360e4d42d5f5cb0ce5')},{set:{name:"updated name",adress:"updated_address"}})

