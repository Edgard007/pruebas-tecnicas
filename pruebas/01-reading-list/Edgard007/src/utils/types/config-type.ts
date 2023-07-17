export type ModeSite = "dark" | "light";
export type LngSite = "es" | "en";

export type ConfigAction =
  | { type: "SET_MODE"; payload: { mode: ModeSite } }
  | { type: "SET_LNG"; payload: { lng: LngSite } }
  | { type: "RESTORE"; payload: { lng: LngSite; mode: ModeSite } }
  | { type: "RESET" };
