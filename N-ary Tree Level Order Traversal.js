/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    const arr = [[root.val]]
    let kids = root.children
    let values
    do{
        [values, kids] = getEm(kids)
        values.length > 0 ? arr.push(values) : null

    }while(kids.length > 0)
    return arr
    
};

function getEm(node_arr){
    const values = []
    const kids = []
    for(const x of node_arr){
        if(x){
            values.push(x.val)
            kids.push(...x.children)
        }
    }
    
    return [values, kids]
    
}
