<template>
  <div>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div class="output" v-html="output"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import marked from "marked";
import _ from "lodash";

const delay = window.location.hash.includes("?delay=test") ? 16 : 300;

export default defineComponent({
  name: "Markdown",
  components: {},
  setup() {
    const input = ref(
      `# 沁园春·雪\n 
# 【作者】毛泽东  【朝代】近现代 \n
# 北国风光，\n
# 千里冰封，\n
# 万里雪飘。\n
# 望长城内外，惟余莽莽；\n
# 大河上下，顿失滔滔。 \n
# 山舞银蛇，原驰蜡象，欲与天公试比高。\n 
# 须晴日，看红装素裹，分外妖娆。\n
# 江山如此多娇，引无数英雄竞折腰。\n
# 惜秦皇汉武，略输文采；\n
# 唐宗宋祖，稍逊风骚。\n
# 一代天骄，成吉思汗，只识弯弓射大雕。\n
# 俱往矣，数风流人物，还看今朝。\n
`
    );
    const output = computed(() => marked(input.value, { sanitize: true }));
    // event: HTMLTextAreaElement
    const update = _.debounce((event: any) => {
      input.value = event.target.value;
    }, delay);

    return {
      input,
      output,
      update
    };
  }
});
</script>

<style lang="scss">
#editor {
  margin: 0;
  height: 100vh;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  ol,
  ul {
    list-style: initial !important;
  }
}
.output {
  background-color: #f6f6f6;
}
textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
