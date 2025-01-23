import ThisWeek from "@/components/ThisWeek.vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

describe('ThisWeek', () => {
    describe('isDevelopmentWeek', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(ThisWeek);
        })

        it('should return true on week 1', () => {
            expect(wrapper.vm.isDevelopmentweek(1)).toBe(true);
            expect(wrapper.vm.isDevelopmentweek(3)).toBe(false);
        })

        it('should return true on week 2', () => {
            expect(wrapper.vm.isDevelopmentweek(2)).toBe(true);

        });

        it('should return false on week 3', () => {
            expect(wrapper.vm.isDevelopmentweek(3)).toBe(false);
        });
    })

    describe('WeekLabel', () => {
        let wrapper = mount(ThisWeek);

        beforeEach(() => {
            wrapper = mount(ThisWeek);
        })

        it('should return development', () => {
            let weekOfYear = 1;
            expect(wrapper.vm.weekLabel(weekOfYear)).equal('Development');

            weekOfYear = 2;
            expect(wrapper.vm.weekLabel(weekOfYear)).equal('Development');
        })

        it('should return planning', () => {
            let weekOfYear = 3;
            expect(wrapper.vm.weekLabel(weekOfYear)).equal('Planning');
        })
    })
})
