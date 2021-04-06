type TUtilType<T extends object = never> = (
  payload?: T
) => {
  type: string;
  payload: T | undefined;
};

export default <T extends object = never>(actionType: string): TUtilType<T> => (
  payload
) => ({
  type: actionType,
  payload,
});
