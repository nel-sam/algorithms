class BstNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.data) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
      }
    } else if (value > this.data) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
      }
    }
  }

  contains(value) {
    if (this.data === value) {
      return this;
    }

    if (value < this.data && this.left) {
        return this.left.contains(value);
    } else if (value > this.data && this.right) {
        return this.right.contains(value);
    }

    return null;
  }
}

class Bst {
  constructor(rootValue) {
    this.root = new BstNode(rootValue);
  }

  validate() {
    return this.validateRec(this.root);
  }

  validateRec(node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }

    if (min !== null && node.data < min) {
      return false;
    }

    if (node.left) {
      return validateRec(node.left, min, node.data);
    }

    if (node.right) {
      return validateRec(node.right, node.data, max);
    }

    return true;
  }
}
