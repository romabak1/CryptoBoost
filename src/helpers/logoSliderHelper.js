export function slidesAdaptiveCount(screenWidth) {
  if (screenWidth < 1024) {
    return 3;
  } else if (screenWidth >= 1024 && screenWidth < 1440) {
    return 4;
  } else if (screenWidth >= 1440 && screenWidth < 2500) {
    return 5;
  }
  return 6;
}
