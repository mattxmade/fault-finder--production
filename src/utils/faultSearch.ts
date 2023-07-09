import { FaultItem } from "../types";
import { BrandItem } from "../types";

import brands from "../../data/brands";

const faultSearch = (string: string) => {
  const matches: FaultItem[] = [];
  const exactMatch: FaultItem[] = [];
  const brandMatches: FaultItem[] = [];

  const searchQuery = string.toLowerCase();
  const queryList = searchQuery.trim().split(/\s+/);

  brands.map((brand: BrandItem) => {
    const brandName = brand.name.toLowerCase();

    brand.faultCodes.map((item) => {
      queryList.includes(brandName)
        ? queryList.some((query) => query === item.faultCode.toLowerCase())
          ? exactMatch.push(item)
          : brandMatches.push(item)
        : queryList.some((query) => query === item.faultCode.toLowerCase()) &&
          matches.push(item);
    });
  });

  if (exactMatch.length) return exactMatch;
  if (brandMatches.length) return brandMatches;

  return matches.length ? matches : null;
};

export default faultSearch;
