<template>
  <p>Текст</p>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  methods: {
    /*test(dictionary, word) {
      const letters = word.split('');
      const words = {};
      const treeRoot = {"data": "", "terminator": false};
      let result = false;

      function buildTree(dictionary) {
        for (let i = 0; i < dictionary.length; i++) {
          const word = dictionary[i];
          const arrWord = word.split("");

          let curNode = treeRoot;
          for (let j = 0; j < arrWord.length; j++) {
            if (curNode[word[j]] == undefined) {
              curNode[word[j]] = {"data": word.slice(0, j + 1), "terminator": false};
            }
            curNode = curNode[arrWord[j]];
          }
          curNode.terminator = true;
        }
      }

      buildTree(dictionary)

      function checkWord(node, depth) {
        for (let i = 0; i < letters.length; i++) {
          let child = node[letters[i]]
          if (child != undefined) {
            if (child.terminator) words[letters[i]] = child.data
            checkWord(child, depth + 1);
          }
        }
      }

      checkWord(treeRoot, 0)

      console.log(words)
      console.log(result)

      if (Object.keys(words).join('') === word) result = true


    }*/

  },
  mounted() {
    /*this.test(['ab', 'a', 'bc'], 'abcj')*/
  }
}
</script>
