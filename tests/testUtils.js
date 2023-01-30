exports.getMockResponse = () => {
  const res = {};
  res.status = () => res;
  res.send = () => res;
  res.json = () => res;
  return res;
};