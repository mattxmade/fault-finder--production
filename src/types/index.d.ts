type BrandItem = {
  id: string | any;
  name: string;

  info: { website: string | ""; manual: { page: number; link: string | "" } };

  hasIcon: boolean;
  hasFlash: boolean;
  hasFaultCode: boolean;
  hasFaultNote: boolean;

  faultCodes: FaultItem[];
};

type FaultItem = {
  brand: string;
  model: string;
  faultType: "CODE" | "LED" | "ICON" | "NOTE";
  faultCode: string;
  faultIcon?: string | undefined;
  faultCause?: string | undefined;
  faultCheck?: string | undefined;

  cause?: string;
  component?: string;
};
