export interface Shop {
    alwaysOpen?: Boolean;

    closeHourFri?: number;
  
    closeHourMon?: number;
  
    closeHourSat?: number;
  
    closeHourSun?: number;
  
    closeHourThu?: number;
  
    closeHourTue?: number;
  
    closeHourWed?: number;
  
    closeMinFri?: number;
  
    closeMinMon?: number;
  
    closeMinSat?: number;
  
    closeMinSun?: number;
  
    closeMinThu?: number;
  
    closeMinTue?: number;
  
    closeMinWed?: number;
  
    minOrder?: number;
  
    open?: Boolean;
  
    tempClosed?: Boolean;
  
    openHourFri?: number;
  
    openHourMon?: number;
  
    openHourSat?: number;
  
    openHourSun?: number;
  
    openHourThu?: number;
  
    openHourTue?: number;
  
    openHourWed?: number;
  
    openMinFri?: number;
  
    openMinMon?: number;
  
    openMinSat?: number;
  
    openMinSun?: number;
  
    openMinThu?: number;
  
    openMinTue?: number;
  
    openMinWed?: number;
  
    receiptFooter?: string;
  
    receiptHeader?: string;
  
    serviceAreas: ServiceArea[];
  
    closedUntil?: Date;
  }

  export interface ServiceArea{
    zip?: string;
    transitCost?: number;
  }
