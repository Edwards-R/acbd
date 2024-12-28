class ImportFormat{
    binomial: string;
    easting: string;
    northing: string; 
    accuracy: string;
    datum: string;
    gridRef: string;
    lowerdate: string;
    upperdate: string;
    presenceMale: string;
    presenceRepfem: string;
    presenceNonRepfem: string;
    presenceNest: string;
    locationName: string;
    vcNum: string;
    vcName: string;
    collector: string;
    determiner: string;
    voucherInfo: string;
    interactions: string[];
    additionalInformation: string[];

    constructor(
        binomial: string,
        easting: string,
        northing: string, 
        accuracy: string,
        datum: string,
        gridRef: string,
        lowerdate: string,
        upperdate: string,
        presenceMale: string,
        presenceRepfem: string,
        presenceNonRepfem: string,
        presenceNest: string,
        locationName: string,
        vcNum: string,
        vcName: string,
        collector: string,
        determiner: string,
        voucherInfo: string,
        interactions: string[],
        additionalInformation: string[]
    ) {
        this.binomial = binomial
        this.easting = easting
        this.northing  = northing 
        this.accuracy = accuracy
        this.datum = datum
        this.gridRef = gridRef
        this.lowerdate = lowerdate
        this.upperdate = upperdate
        this.presenceMale = presenceMale
        this.presenceRepfem = presenceRepfem
        this.presenceNonRepfem = presenceNonRepfem
        this.presenceNest = presenceNest
        this.locationName = locationName
        this.vcNum = vcNum
        this.vcName = vcName
        this.collector = collector
        this.determiner = determiner
        this.voucherInfo = voucherInfo
        this.interactions = interactions
        this.additionalInformation = additionalInformation
    }
}