import { DiagnosticCenter } from "./diagnostic-center";

export interface Test {
    testId: string,
    testName: string;
    diagnosticCenter: DiagnosticCenter;
}
