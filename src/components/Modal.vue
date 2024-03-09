<template>
  <div class="modal fade in modal-active" :class="{ show: isOpen }">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" @click="closeModal" class="close">
            <span>&times;</span>
          </button>
          <h4 class="modal-title">Form Submitted</h4>
        </div>
        <div class="modal-body">
          <p>The form has been submitted successfully.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:isOpen", false);
    },
  },
};
</script>
<style>
.modal-active.show {
  display: block !important;
}
</style>
