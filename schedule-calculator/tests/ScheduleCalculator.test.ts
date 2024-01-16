import { ConstraintApplied } from "../src/constraints/ConstraintApplied";
import IsOpenConstraint from "../src/constraints/IsOpenConstraint";
import WeeklyTimeConstraint from "../src/constraints/WeeklyTimeConstraint";
import ScheduleCalculator from "../src/ScheduleCalculator";

describe('ScheduleCalculator', () => {
    describe('createContraintMap', () => {
        it('should create constraint map', () => {
            let constraint1 = new IsOpenConstraint();
            let constraint2 = new WeeklyTimeConstraint();
            let constraint3 = new IsOpenConstraint();
            const constraints = [constraint1, constraint2, constraint3];

            ScheduleCalculator.calculateSchedules([], [], constraints);
            let constraintMap = ScheduleCalculator.getConstraintMap();

            expect(constraintMap.has(ConstraintApplied.beforeSectionGrouping)).toBe(true);
            expect(constraintMap.has(ConstraintApplied.afterSectionGrouping)).toBe(true);
            expect(constraintMap.has(ConstraintApplied.duringCalculation)).toBe(true);

            expect(constraintMap.get(ConstraintApplied.beforeSectionGrouping)).toHaveLength(2);
            expect(constraintMap.get(ConstraintApplied.afterSectionGrouping)).toHaveLength(1);
            expect(constraintMap.get(ConstraintApplied.duringCalculation)).toHaveLength(0);
        });
    });
});