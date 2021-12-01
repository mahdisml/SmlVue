import { ref } from "vue";

export const store_count = ref<number>(0)

// no need for it , you can set it in every where !
export function increase (num:number) {
    store_count.value = store_count.value + num
}
