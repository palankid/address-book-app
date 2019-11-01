const blabla = ([...rest]) => {
  return rest.reduce((acc, curr) => {
    return [ ...acc, curr, 1 ]
  }, [])
};

export default blabla
