// Problem: Implement an algorithm to delete a node
// in the middle of a single linked list, given only
// access to that node.

// EXAMPLE:
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

// in the context of the example above:
// to delete ‘c’ from the linked list a->b->c->d->e
// we copy the properties of d into c. That way, b maintains
// the correct next reference, and c now how has properties
// of d and links directly to e.
// a->b->c->d->e => a->b->c(with d's properties)->e

// So, to remove a node from the list, we just copy the
// properties of the next node onto the node we want to
// delete. That way, the parent node of the node we
// want to delete will still maintain the correct next reference
// and all of the properties of the referenced object
// will be the same as the properties of the delete node's next node.

// Each linked list is made up of nodes which have
// properties like next and value.
// note, this will not work if passed the last node in the list.
var deleteNode = function(node){
  //checks to make sure it is not the last node in the list.
  //assumes that the last node's next value would be null or undefined.
  node.next && makeIdentical(node, node.next);
};

// extends object1 with the properties of object 2.
// will overwrite object 1's properties in favor of
// object 2's. Delete's properties of object1 which
// were not contained in object2.
var makeIdentical = function(object1, object2){
  for (var key in object2){
    object2.hasOwnProperty(key) && (object1[key] = object2[key]);
  }

  for (key in object1){
    !object2.hasOwnProperty(key) && delete object1[key];
  }
};
