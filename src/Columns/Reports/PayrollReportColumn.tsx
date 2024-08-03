import { PayrollReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<PayrollReportParams>()

export const PayrollReportColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 200,
    }),
    columnHelpers.accessor('role', {
        header: 'Role',
        size: 200,
    }),
    columnHelpers.accessor('designation', {
        header: 'Designation',
        size: 200,
    }),
    columnHelpers.accessor('month_year', {
        header: 'Month Year',
        size: 200,
    }),
    columnHelpers.accessor('payslip', {
        header: 'Payslip',
        size: 200,
    }),
    columnHelpers.accessor('basic_salary', {
        header: 'Basic Salalry',
        size: 200,
    }),
    columnHelpers.accessor('earning', {
        header: 'Earning',
        size: 200,
    }),
    columnHelpers.accessor('deduction', {
        header: 'Deduction',
        size: 200,
    }),
    columnHelpers.accessor('gross_salary', {
        header: 'Gross Salary',
        size: 200,
    }),
    columnHelpers.accessor('tax', {
        header: 'Tax',
        size: 200,
    }),
    columnHelpers.accessor('net_salary', {
        header: 'Net Salary',
        size: 200,
    }),
]
