import { defineConfig } from 'umi';

export default defineConfig({
  // layout,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  alias: {
    config: '/config',
  },
});
