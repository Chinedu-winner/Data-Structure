class TreeNode{
    constructor(value){
        this.value = value;
        this.children = []; //Array to hold child node
    }
}

const root = new TreeNode(1);

root.children.push(new TreeNode(2))
root.children.push(new TreeNode(3))

console.log(root);

root.children[0].children.push(new TreeNode(4));
root.children[0].children.push(new TreeNode(5));

// BINARY TREE 

class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.left = null; //left child 
        this.right = null; // Right child 
    }
} 

const binaryRoot = new BinaryTreeNode(1);

binaryRoot.left = new BinaryTreeNode(2)
binaryRoot.right = new BinaryTreeNode(3)

console.log(binaryRoot);


binaryRoot.left.left = new BinaryTreeNode(4); 
binaryRoot.left.right = new BinaryTreeNode(5); 