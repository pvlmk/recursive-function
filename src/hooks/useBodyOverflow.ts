function useBodyOverflow(state?: string | null, dynamicState?: boolean) {
  if (state) document.body.style.overflow = state;
  if (dynamicState === true) document.body.style.overflow = "hidden";
  if (dynamicState === false) document.body.style.overflow = null;
}

export default useBodyOverflow;
