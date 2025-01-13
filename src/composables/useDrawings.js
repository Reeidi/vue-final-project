import { ref } from 'vue';
import { getAllDrawings } from '@/services/drawingService';

export function useDrawings() {
  const allDrawings = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const loadData = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      allDrawings.value = await getAllDrawings();
    } catch (err) {
      error.value = err.message || 'Failed to load drawings';
    } finally {
      isLoading.value = false;
    }
  };

  loadData();

  return {
    allDrawings,
    isLoading,
    error
  };
};
