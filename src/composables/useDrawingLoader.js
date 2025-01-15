import { getDrawing } from "@/services/drawingService";
import { ref } from "vue";

export function useDrawingLoader(imageId) {
  const author = ref({});
  const drawing = ref({});

  async function loadData() {
    drawing.value = await getDrawing(imageId);
    author.value = drawing.value.author;
  };

  loadData();

  return {
    drawing,
    author
  };
};
