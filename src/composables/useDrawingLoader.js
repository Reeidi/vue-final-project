import { getDrawing } from "@/services/drawingService";
import { ref } from "vue";

export function useDrawingLoader(imageId, onLoaded) {
  const author = ref({});
  const drawing = ref({});

  const loadData = async () => {
    drawing.value = await getDrawing(imageId);
    author.value = drawing.value.author;
    onLoaded();
  };

  loadData();

  return {
    drawing,
    author
  };
};
