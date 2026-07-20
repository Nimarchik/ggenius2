export const parseRoles = (roles) => {
  try {
    return JSON.parse(roles);
  } catch {
    return [];
  }
};