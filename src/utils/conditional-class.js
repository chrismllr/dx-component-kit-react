export default function conditionalClass (bool, declaration) {
  if (bool) {
    return declaration;
  }
  return '';
}
