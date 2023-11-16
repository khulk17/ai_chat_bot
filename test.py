def BoggleSolver(strArr):
    # Parse the input
    matrix, word_list = strArr[0].split(', '), strArr[1].split(',')

    # Convert the matrix into a 2D list
    matrix = [list(row) for row in matrix]

    def is_valid(x, y, word):
        if not word:
            return True
        if 0 <= x < 4 and 0 <= y < 4 and matrix[x][y] == word[0]:
            # Mark the cell as visited
            original_char = matrix[x][y]
            matrix[x][y] = None
            remaining_word = word[1:]

            # Check in all eight adjacent directions
            directions = [(1, 0), (-1, 0), (0, 1), (0, -1),
                          (1, 1), (-1, -1), (1, -1), (-1, 1)]
            for dx, dy in directions:
                if is_valid(x + dx, y + dy, remaining_word):
                    # Restore the original character in the matrix
                    matrix[x][y] = original_char
                    return True

            # Restore the original character in the matrix
            matrix[x][y] = original_char

        return False

    def search_word(word):
        for i in range(4):
            for j in range(4):
                if is_valid(i, j, word):
                    return True
        return False

    not_found_words = [word for word in word_list if not search_word(word)]

    if not not_found_words:
        return "true"
    else:
        return ",".join(not_found_words)

# Test cases
print(BoggleSolver(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum"]))
print(BoggleSolver(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"]))
