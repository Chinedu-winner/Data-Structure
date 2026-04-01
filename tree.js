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

binaryRoot.left.left = new BinaryTreeNode(4); 
binaryRoot.left.right = new BinaryTreeNode(5); 

function preorder(node, out=[]) {
    if (!node) return out;
    out.push(node.value);
    preorder(node.left, out);
    preorder(node.right, out);
    return out;
}   

function inorder(node, out=[]) {
    if (!node) return out;
    inorder(node.left, out);
    out.push(node.value);
    inorder(node.right, out);
    return out;
}

function postorder(node, out=[]) {
    if (!node) return out;
    postorder(node.left, out);
    postorder(node.right, out);
    out.push(node.value);
    return out;
}

console.log(preorder(binaryRoot), "preorder");
console.log(inorder(binaryRoot), "inorder");
console.log(postorder(binaryRoot), "postorder");
