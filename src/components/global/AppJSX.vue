<script>
export default {
  props: {
    data: {
      type: [Object, String],
      required: true,
    },
  },
  render() {
    return this.data;
  },
};
</script>
