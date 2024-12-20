```javascript
// Solution using $or operator to handle empty arrays
function findDocuments(field, values) {
  if (values.length === 0) {
    return db.collection.find({}); // Return all documents if the array is empty
  } else {
    return db.collection.find({ field: { $in: values } });
  }
}
```