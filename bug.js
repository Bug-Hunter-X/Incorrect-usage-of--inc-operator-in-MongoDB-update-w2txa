```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("6500a7a6b567a20f48e6c994")}, {"$inc": {"count": "10" }});
```