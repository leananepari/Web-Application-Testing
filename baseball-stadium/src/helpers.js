export const strike = (val) => {
  if (val < 3) {
    return val += 1;
  } else {
    return 3;
  }
}

export const ball = (val) => {
  if (val < 4) {
    return val += 1;
  } else {
    return 4;
  }
}

export const foul = (val) => {
  if (val === 0) {
    return 1;
  } else if (val === 1) {
    return 2;
  } else {
    return 2;
  }
}

export const hit = () => {
  return 0;
}