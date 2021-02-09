
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix && matrix.length > 0) {

        let array = [];

        for (let i = 0; i < matrix.length; i++) {

            let direction = (i % 2 === 0);
            let j = direction ? 0 : matrix[i].length - 1;

            if (direction)
                for (; j < matrix[i].length; j++)
                    array.push(matrix[i][j]);
            else
                for (; j >= 0; j--)
                    array.push(matrix[i][j]);
        }
        return array;
    }
    return [];
}
