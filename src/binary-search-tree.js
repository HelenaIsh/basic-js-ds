const { Node } = require('../extensions/list-tree.js');

const tempAdd = (data, currentNode) => {
  if (data > currentNode.data) {
    if (!currentNode.right) {
      currentNode.right = new Node(data);
    } else {
      tempAdd(data, currentNode.right);
    }
  } else {
    if (!currentNode.left) {
      currentNode.left = new Node(data);
    } else {
      tempAdd(data, currentNode.left);
    }
  }
}

const tempHas = (data, currentNode) => {
  if (!currentNode.data) {
    return false;
  }
  if (data === currentNode.data) {
   return true;
  } else if (data > currentNode.data) {
    if (!currentNode.right) return false;
    return tempHas(data, currentNode.right);
  } else {
    if (!currentNode.left) return false;
    return tempHas(data, currentNode.left)
  }
}


const tempFind = (data, currentNode) => {
  if (!currentNode.data) {
    return null;
  }
  if (data === currentNode.data) {
    return currentNode;
  } else if (data > currentNode.data) {
    if (!currentNode.right) return null;
    return tempFind(data, currentNode.right);
  } else {
    if (!currentNode.left) return null;
    return tempFind(data, currentNode.left)
  }
}

const tempMin =(currentNode) => {
  if (currentNode.left) {
    return tempMin(currentNode.left)
  } else {
    return currentNode.data;
  }
}
const tempMax =(currentNode) => {
  if (currentNode.right) {
    return tempMax(currentNode.right)
  } else {
    return currentNode.data;
  }
}

const removeNode = (data, currentNode) => {
  console.log('removeNode', data, currentNode);
  if ( currentNode === null ) {
    console.log('1) no data')
    return null;
  }
  if ( data < currentNode.data ) {
    console.log('2) data < ')
    currentNode.left = removeNode(data, currentNode.left);
    return currentNode;
  } else if(data > currentNode.data) {
    console.log('3) data >')
    currentNode.right = removeNode(data, currentNode.right);
    return currentNode;
  } else {
    if(currentNode.left === null && currentNode.right === null) {
      console.log('4) no left, no right')
      currentNode = null;
      return currentNode;
    }
    if (currentNode.left === null) {
      console.log('5) no left')
      currentNode = currentNode.right;
      return currentNode;
    }
    if(currentNode.right === null) {
      console.log('6) no right')
      currentNode = currentNode.left;
      return currentNode;
    }
    let aux = tempMin(currentNode.right);
    currentNode.data = aux;
    console.log('7) last', aux)
    currentNode.right = removeNode(aux, currentNode.right);
    return currentNode;
  }
}

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.root()) {
      this.rootNode = new Node(data);
    } else {
      tempAdd(data, this.rootNode);
    }
  }

  has(data) {
    return tempHas(data, this.rootNode)
  }

  find(data) {
    return tempFind(data, this.rootNode)
  }

  remove(data) {
    this.rootNode = removeNode(data, this.rootNode);
    console.log(this.rootNode)
  }

  min() {
    if (!this.rootNode) {
      return null
    }
    return tempMin(this.rootNode);
  }

  max() {
    if (!this.rootNode) {
      return null
    }
    return tempMax(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};