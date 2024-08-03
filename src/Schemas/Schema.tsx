import Subject from '@/app/[subdomain]/academic/subject/page'
import Department from '@/app/[subdomain]/settings/department/page'
import Role from '@/app/[subdomain]/settings/role/page'
import { time } from 'console'
import { date, string, z } from 'zod'

export enum InstituteGroupType {
    Private = 'private',
    Public = 'public',
}

export const instituteGroupTypeOption = Object.values(InstituteGroupType)

export const InstituteGroupForm = z
    .object({
        name: z.string().trim().min(5).max(50),
        domain: z.string(),
        address: z.string().min(5),
        city: z.string().min(3),
        state: z.string(),
        pincode: z.string(),
        email: z.string().email(),
        phone: z.string(),
        contact_person_name: z.string(),
        contact_person_phone: z.string(),
        type: z.nativeEnum(InstituteGroupType, {
            errorMap: () => {
                return {
                    message: 'Institute group type is required',
                }
            },
        }),
        password: z.string().refine(
            password => {
                if (password !== '' && password.length < 6) return false
                return true
            },
            {
                message: 'Password is required',
            },
        ),
        confirm_password: z.string(),
        website_url: z
            .string()
            .refine(
                website_url => {
                    if (website_url !== '' && website_url.length < 2)
                        return false
                    return true
                },
                {
                    message: 'Website URL is required',
                },
            )
            .transform(website_url =>
                website_url === '' ? null : website_url,
            ),
    })
    .superRefine((val, ctx) => {
        if (val.password !== val.confirm_password) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['confirm_password'],
                message: 'Passwords do not match',
            })
        }
    })
// Setting

export const SessionForm = z.object({
    name: z.string().min(1, { message: 'Session Name is required' }),
})
export const LanguageForm = z.object({
    name: z.string().min(1, { message: 'Language Name is required' }),
    slug: z.string().min(1, { message: 'Language slug is required' }),
    country_code: z
        .string()
        .min(1, { message: 'Language country code is required' }),
})
export const InstituteForm = z.object({
    university_board: z.string(),
    session: z.nativeEnum(InstituteGroupType, {
        errorMap: () => {
            return {
                message: 'Institute group type is required',
            }
        },
    }),
    currency_symbol: z.string(),
    currency_symbol_position: z.string(),
    biometric: z.string(),
    biometric_type: z.string(),
    biometric_device_ids: z.string(),
    footer_text: z.string(),
    admission_number_auto_generate: z.string(),
    admission_number_Suffix: z.string(),
    admission_number_digits: z.string(),
    admission_number_start_from: z.string(),
    staff_id_number_auto_generate: z.boolean(),
    staff_id_number_suffix: z.string(),
    staff_id_number_digits: z.string(),
    staff_id_number_start_form: z.string(),
    duplicate_fee_receipt: z.boolean(),
    number_of_fee_receipt: z.string(),
    language: z.string(),
    session_start_month: z.string(),
    week_start_from: z.string(),
})
export const RoleForm = z.object({
    name: z.string().min(1, { message: 'Role Name is required' }),
})

export const DisableReasonForm = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
})
export const StudentCategoryForm = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    code: z.string().min(1, { message: 'Code is required' }),
})
export const StudentHouseForm = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    code: z.string().min(1, { message: 'Code is required' }),
})
export const DepartmentForm = z.object({
    name: z.string().min(1, { message: 'Department Name is required' }),
})
export const DesignationForm = z.object({
    name: z.string().min(1, { message: 'Designation Name is required' }),
})
export const LeaveTypesForm = z.object({
    name: z.string().min(1, { message: 'Designation Name is required' }),
})
export const FormGroupForm = z.object({
    name: z.string().min(1, { message: 'Designation Name is required' }),
})
export const CustomFieldsForm = z.object({
    belongs: z.string(),
    name: z.string(),
    from_group: z.string(),
    type: z.string(),
    column: z.string(),
    is_required: z.string(),
    options_teaxarea: z.string(),
    visible_on_table: z.string(),
})
export const StaffShiftForm = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    start_time: z.string().min(1, { message: 'Start time is required' }),
    end_time: z.string().min(1, { message: 'End time is required' }),
})
export const AssignShifttostaffForm = z.object({
    status: z.string(),
    staff_Select: z.string(),
})
export const AllowanceForm = z.object({
    name: z.string().min(1, { message: 'Allowance Name is required' }),
})
export const DeductionForm = z.object({
    name: z.string().min(1, { message: 'Deduction Name is required' }),
})
export const SMSSettingForm = z.object({
    api_key: z.string(),
    sender_id: z.string(),
    status: z.string(),
})
export const EmailSettingForm = z.object({
    smpt_username: z.string(),
    smpt_password: z.string(),
    smpt_server: z.string(),
    smpt_port: z.string(),
    smpt_security: z.string(),
    smpt_auth: z.string(),
})
export const PaymentGatewayForm = z.object({
    select_gateway: z.string(),
    api_key: z.string(),
    secret_key: z.string(),
    merchant_id: z.string(),
    merchant_key: z.string(),
    auth_token: z.string(),
    website: z.string(),
    status: z.string(),
})
//Hostel
export const HostelForm = z.object({
    name: z.string(),
    hostel_type: z.string(),
    total_rooms: z.string(),
    total_beds: z.string(),
    warden: z.string(),
})
export const HostelRoomsForm = z.object({
    name: z.string(),
    hostel: z.string(),
    number_of_beds: z.string(),
    occupation_status: z.string(),
    vacant_beds: z.string(),
    floor: z.string(),
})
export const HostelRoomAllocationForm = z.object({
    hostel_room: z.string(),
    student: z.string(),
    from_date: z.string(),
    to_date: z.string(),
})
export const VisitorLogForm = z.object({
    hostel: z.string(),
    name: z.string(),
    mobile_number: z.string(),
    purpose: z.string(),
    date: z.string(),
    in_time: z.string(),
    out_time: z.string(),
})

// HR
export const StaffForm = z.object({
    staff_id: z.string(),
    first_name: z.string(),
    middle_name: z.string(),
    last_name: z.string(),
    designation: z.string(),
    department: z.string(),
    role: z.string(),
    mobile_number: z.string(),
    email: z.string(),
    date_of_birth: z.string(),
    gender: z.string(),
    marital_status: z.string(),
    blood_group: z.string(),
    date_of_joining: z.string(),
    current_address: z.string(),
    permanent_address: z.string(),
    qualifications: z.string(),
    experience: z.string(),
    photo: z.string(),
    leaves_with_leave_type_and_leaves: z.string(),
    allowance_with_allowance_and_amount: z.string(),
    deduction_with_deduction_and_amount: z.string(),
    custom_fields: z.string(),
})
export const DisableStaffForm = z.object({
    role: z.string(),
    search_by_keyword: z.string(),
})
export const StaffLeaveApplyForm = z.object({
    staff: z.string(),
    leave_type: z.string(),
    from_date: z.string(),
    to_date: z.string(),
    reason: z.string(),
    date: z.string(),
})
export const StaffAttendanceForm = z.object({
    date: z.string(),
    clock_in_time: z.string(),
    clock_out_time: z.string(),
    attendance_status: z.string(),
    reason: z.string(),
    out_time: z.string(),
})
export const PayrollForm = z.object({
    year: z.string(),
    month: z.string(),
    staff: z.string(),
    staff_id: z.string(),
    name: z.string(),
    role: z.string(),
    department: z.string(),
    designation: z.string(),
    phone: z.string(),
    status: z.string(),
    action: z.string(),
})
export const FrontCMSSettingForm = z.object({
    // front_cms: z.string(),
    // sidebar: z.string(),
    // language_rtl_text_mode: z.string(),
    sidebar_option: z.string(),
    logo: z.string(),
    favicon: z.string(),
    footer_text: z.string(),
    cookie_consent: z.string(),
    google_analytics: z.string(),
    whatsapp_url: z.string(),
    facebook_url: z.string(),
    twitter_url: z.string(),
    youtube_url: z.string(),
    google_url: z.string(),
    linkedin_url: z.string(),
    instagram_url: z.string(),
    pinterest_url: z.string(),
})
//sysytem setting
export const OnlineAdmissionSettingForm = z.object({
    online_admission: z.string(),
    online_admission_payment_option: z.string(),
    online_admission_form_fees: z.string(),
    name: z.string(),
    action: z.string(),
})
export const PayslipForm = z.object({
    header_image: z.string(),
    footer_content: z.string(),
})
export const OnlineAdmissionReceiptForm = z.object({
    header_image: z.string(),
    footer_content: z.string(),
})
export const FeesReceiptForm = z.object({
    header_image: z.string(),
    footer_content: z.string(),
})
// Transport Module
export const VehiclesForm = z.object({
    name: z.string(),
    vehicle_code: z.string(),
    number_plate: z.string(),
    capacity: z.string(),
    vehicle: z.string(),
    chassis_number: z.string(),
    model: z.string(),
    make_year: z.string(),
    purchase_type: z.string(),
    purchase_date: z.string(),
})
export const StopsForm = z.object({
    name: z.string(),
    address: z.string(),
    latitude: z.string(),
    longitude: z.string(),
})
export const RouteForm = z.object({
    name: z.string(),
    start_point: z.string(),
    end_point: z.string(),
    select_stops: z.string(),
})
export const VehicleAssignmentForm = z.object({
    vehicle: z.string(),
    driver: z.string(),
    route: z.string(),
    date: z.string(),
    out_time: z.string(),
    in_time: z.string(),
})
export const TripLogsForm = z.object({
    vehicle: z.string(),
    driver: z.string(),
    route: z.string(),
    date: z.string(),
    out_time: z.string(),
    in_time: z.string(),
})
export const VehicleMaintenanceForm = z.object({
    vehicle: z.string(),
    date: z.string(),
    desciption: z.string(),
    amount: z.string(),
})
export const VehicleFuelForm = z.object({
    vehicle: z.string(),
    date: z.string(),
    fuel_type: z.string(),
    quantity: z.string(),
    unit: z.string(),
    unit_price: z.string(),
    total_amount: z.string(),
})
// Academic Module

export const SectionsForm = z.object({
    name: z.string(),
})

export const ClassForm = z.object({
    name: z.string(),
    select_section: z.string(),
})

export const SubjectForm = z.object({
    name: z.string(),
    code: z.string(),
    type: z.boolean(),
})

export const SubjectGroupForm = z.object({
    name: z.string(),
    class: z.string(),
    sections: z.string(),
    subjects: z.string(),
})
export const PromoteStudentForm = z.object({
    class: z.string(),
    section: z.string(),
    promote_in_session: z.string(),
})

export const AssignClassTeacherForm = z.object({
    class: z.string(),
    section: z.string(),
    teacher: z.string(),
})
export const HomeworkForm = z.object({
    title: z.string(),
    description: z.string(),
    class: z.string(),
    section: z.string(),
    subject: z.string(),
    date: z.string().datetime(),
    due_date: z.string(),
})
// Student Management
export const StudentAdmissionForm = z.object({
    roll_number: z.string(),
    admission_date: z.string(),
    admission_number: z.string(),
    class: z.string(),
    section: z.string(),
    sibling: z.string(),
    student_category: z.string(),
    student_house: z.string(),
    first_name: z.string(),
    middle_name: z.string(),
    last_name: z.string(),
    mobile_number: z.string(),
    email: z.string(),
    gender: z.string(),
    blood_group: z.string(),
    photo: z.string(),
    date_of_birth: z.string(),
    father_occupation: z.string(),
    father_email: z.string(),
    father_name: z.string(),
    father_phone: z.string(),
    father_qualification: z.string(),
    father_photo: z.string(),
    mother_name: z.string(),
    mother_occupation: z.string(),
    mother_email: z.string(),
    mother_phone: z.string(),
    mother_qualification: z.string(),
    mother_photo: z.string(),
    guardian_is: z.string(),
    guardian_relation: z.string(),
    guardian_name: z.string(),
    guardian_occupation: z.string(),
    guardian_phone: z.string(),
    guardian_qualification: z.string(),
    guardian_photo: z.string(),
    custom_fields: z.string(),
})
export const StudentDetailForm = z.object({
    class: z.string(),
    section: z.string(),
    search_by_keyword: z.string(),
})
export const DisableStudentForm = z.object({
    class: z.string(),
    section: z.string(),
    search_by_keyword: z.string(),
})
export const BulkDeleteForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const StudentAttendanceForm = z.object({})
export const OnlineAdmissionForm = z.object({})
export const StudentLeaveRequestForm = z.object({
    student: z.string(),
    title: z.string(),
    date: z.string(),
    reason: z.string(),
    from_date: z.string(),
    to_date: z.string(),
})

// Finance
export const BudgetTypeForm = z.object({
    name: z.string(),
    description: z.string(),
    status: z.boolean(),
})
export const BudgetForm = z.object({
    budget_type: z.string(),
    department: z.string(),
    amount_allocated: z.string(),
    amount_spent: z.string(),
    amount_remaining: z.string(),
    status: z.boolean(),
})
export const ExpenseTypeForm = z.object({
    name: z.string(),
    description: z.string(),
    status: z.boolean(),
})
export const ExpenseForm = z.object({
    expense_type: z.string(),
    description: z.string(),
    amount: z.string(),
    date: z.string(),
})
export const FeeDiscountForm = z.object({
    expense_type: z.string(),
    discount_code: z.string(),
    discount_type: z.string(),
    discount_amount: z.string(),
    status: z.boolean(),
})
export const FeeGroupForm = z.object({
    name: z.string(),
    due_date: z.string(),
})
export const FeeTypeForm = z.object({
    name: z.string(),
    status: z.boolean(),
})

// Examination

export const TermForm = z.object({
    name: z.string(),
    status: z.boolean(),
})
export const ExamForm = z.object({
    term: z.string(),
    name: z.string(),
    maximum_mark: z.string(),
    practical: z.string(),
    status: z.boolean(),
})
export const GradeTypeForm = z.object({
    name: z.string(),
    status: z.boolean(),
})
export const GradeForm = z.object({
    grade_type: z.string(),
    name: z.string(),
    gpa: z.string(),
    percentage_from: z.string(),
    percentage_to: z.string(),
    gpa_from: z.string(),
    gpa_to: z.string(),
    status: z.boolean(),
})
export const ExamScheduleForm = z.object({
    exam: z.string(),
    class: z.string(),
    section: z.string(),
    subject: z.string(),
    date: z.string(),
    start_time: z.string(),
    end_time: z.string(),
    max_practical_marks: z.string(),
    max_theory_marks: z.string(),
    min_practical_marks: z.string(),
    min_theory_marks: z.string(),
})
export const ExamMarksForm = z.object({
    term: z.string(),
    exam: z.string(),
    class: z.string(),
    section: z.string(),
    subject: z.string(),
    absent: z.boolean(),
    theory_marks: z.string(),
    practical_mark: z.string(),
    comment: z.string(),
    remark: z.string(),
})
export const MarksCardSettingForm = z.object({
    student_profile: z.string(),
    report_card_title: z.string(),
    student_profile_text: z.string(),
    academic_text: z.string(),
    attendance_label: z.string(),
    grade_label: z.string(),
    grade_range: z.string(),
    obtained_marks: z.string(),
    percentage_range: z.string(),
    result: z.string(),
    total_marks: z.string(),
    overall_marks: z.string(),
    overall_grade: z.string(),
    performance: z.string(),
    percentage: z.string(),
    marksheet_date: z.string(),
    parent_sign: z.string(),
    discipline: z.string(),
    co_scholastic_areas: z.string(),
    principal_sign: z.string(),
    teacher_sign: z.string(),
    min_passign_percentage: z.string(),
    marksheet_distrubution_date: z.string(),
    instructions: z.string(),
    is_attendance: z.string(),
    is_grade_range_row: z.string(),
    is_parent_sign: z.string(),
    is_final_grade_column: z.string(),
    is_result_percentage_column: z.string(),
    is_exam_group_name: z.string(),
    is_unconducted_exam: z.string(),
    is_discipline_card: z.string(),
    is_percentage_range: z.string(),
    is_instuctions: z.string(),
    is_obtained_marks: z.string(),
    is_result: z.string(),
    is_attendance_total: z.string(),
    is_co_scholastic_areas: z.string(),
    is_student_sign: z.string(),
    is_grade_column: z.string(),
    is_rank: z.string(),
    marksheet_template: z.string(),
})

// Library

export const MemberForm = z.object({
    member_type: z.string(),
    student: z.string(),
    staff: z.string(),
    member_id: z.string(),
    fine_amount: z.string(),
    status: z.boolean(),
})
export const BookCategoryForm = z.object({
    name: z.string(),
    status: z.boolean(),
})
export const BookForm = z.object({
    book_category: z.string(),
    subject: z.string(),
    language: z.string(),
    name: z.string(),
    isbn_no: z.string(),
    author: z.string(),
    publisher: z.string(),
    edition: z.string(),
    published_year: z.string(),
    price: z.string(),
    quantity: z.string(),
    rack: z.string(),
    row: z.string(),
    column: z.string(),
    status: z.boolean(),
})
export const LibrarySettingForm = z.object({
    return_due_days: z.string(),
    max_book_limit: z.string(),
    fine_amount_per_day: z.string(),
    fine_start_day_after_due_days: z.string(),
    max_number_of_due_allowed: z.string(),
    block_membership_after_fine_amount_Reach: z.string(),
})
export const BookTransactionForm = z.object({
    book: z.string(),
    member_Id: z.string(),
    member_name: z.string(),
    member_type: z.string(),
    issued_date: z.string(),
    return_date: z.string(),
    issue_date: z.string(),
    member: z.string(),
})

// Cerificate

export const TemplateForm = z.object({
    belongs_to: z.string(),
    type: z.string(),
    name: z.string(),
    page_layout: z.string(),
    is_qr_code: z.string(),
    qr_code: z.string(),
    user_photo: z.string(),
    photo_size: z.string(),
    layout_space_top: z.string(),
    layout_space_bottom: z.string(),
    layout_space_right: z.string(),
    layout_space_left: z.string(),
    signature_image_principal: z.string(),
    signature_image_teacher: z.string(),
    logo_image: z.string(),
    background: z.string(),
    content: z.string(),
    status: z.boolean(),
})
export const GenerateStaffCertificateForm = z.object({
    certificate: z.string(),
    search_after_list: z.string(),
    select_staff: z.string(),
    staff_name: z.string(),
    role: z.string(),
    designation: z.string(),
    department: string(),
    father_name: z.string(),
    mother_name: z.string(),
    date_of_joining: z.string(),
    phone: z.string(),
    date_of_birth: z.string(),
})
export const GenerateStaffIDForm = z.object({
    certificate: z.string(),
    search_after_list: z.string(),
    select_staff: z.string(),
    staff_name: z.string(),
    role: z.string(),
    designation: z.string(),
    department: z.string(),
    father_name: z.string(),
    mother_name: z.string(),
    date_of_joining: z.string(),
    phone: z.string(),
    date_of_birth: z.string(),
})

export const GenerateStudentCertificateForm = z.object({
    class: z.string(),
    section: z.string(),
    certificate: z.string(),
    search_after_list: z.string(),
    select_student: z.string(),
    admission_no: z.string(),
    student_name: z.string(),
    father_name: z.string(),
    date_of_birth: z.string(),
    gender: z.string(),
    category: z.string(),
    mobile_number: z.string(),
})

export const GenerateStudentIDForm = z.object({
    class: z.string(),
    section: z.string(),
    certificate: z.string(),
    search_after_list: z.string(),
    select_student: z.string(),
    admission_no: z.string(),
    student_name: z.string(),
    father_name: z.string(),
    date_of_birth: z.string(),
    gender: z.string(),
    category: z.string(),
    mobile_number: z.string(),
})

// Time Table

export const TimeTableForm = z.object({
    select_class: z.string(),
    select_section: z.string(),
    week_wise: z.string(),
    monday: z.string(),
    tuesday: z.string(),
    wednesday: z.string(),
    thursday: z.string(),
    friday: z.string(),
    saturday: z.string(),
    sunday: z.string(),
})
export const StudentTimeTableForm = z.object({
    class: z.string(),
    section: z.string(),
    monday: z.string(),
    tuesday: z.string(),
    wednesday: z.string(),
    thursday: z.string(),
    friday: z.string(),
    saturday: z.string(),
    sunday: z.string(),
})
export const TeacherTimeTableForm = z.object({
    teacher: z.string(),
    monday: z.string(),
    tuesday: z.string(),
    wednesday: z.string(),
    thursday: z.string(),
    friday: z.string(),
    saturday: z.string(),
    sunday: z.string(),
})

//Download center
export const UploadContentForm = z.object({
    content_title: z.string(),
    content_type: z.string(),
    available_for: z.string(),
    available_for_all_class: z.string(),
    class: z.string(),
    section: z.string(),
    upload_date: z.string(),
    description: z.string(),
    content_file: z.string(),
})
export const AssignmentsForm = z.object({
    content_title: z.string(),
    content_type: z.string(),
    available_for: z.string(),
    available_for_all_class: z.string(),
    upload_date: z.string(),
    description: z.string(),
    content_file: z.string(),
})
export const StudyMaterialForm = z.object({
    content_title: z.string(),
    type: z.string(),
    date: z.string(),
    available_for: z.string(),
    action: z.string(),
})
export const SyllabusForm = z.object({
    content_title: z.string(),
    type: z.string(),
    date: z.string(),
    available_for: z.string(),
    action: z.string(),
})
export const OtherDownloadsForm = z.object({
    content_title: z.string(),
    type: z.string(),
    date: z.string(),
    available_for: z.string(),
    action: z.string(),
})

//Inventory
export const IssueItemForm = z.object({
    user_type: z.string(),
    issue_date: z.string(),
    return_date: z.string(),
    note: z.string(),
    item: z.string(),
    item_category: z.string(),
    issue_Return: z.string(),
    issue_to: z.string(),
    issue_by: z.string(),
    quantity: z.string(),
    status: z.string(),
    action: z.string(),
})
export const AddItemStockForm = z.object({
    name: z.string(),
    category: z.string(),
    item_category: z.string(),
    item: z.string(),
    supplier: z.string(),
    store: z.string(),
    quantity: z.string(),
    purchase_price: z.string(),
    date: z.string(),
    attach_document: z.string(),
    description: z.string(),
    action: z.string(),
})
export const AddItemForm = z.object({
    item: z.string(),
    item_category: z.string(),
    unit: z.string(),
    category: z.string(),
    description: z.string(),
    available_quantity: z.string(),
    action: z.string(),
})
export const ItemCategoryForm = z.object({
    item_category: z.string(),
    description: z.string(),
    action: z.string(),
})
export const ItemStoreForm = z.object({
    item_store_name: z.string(),
    item_stock_code: z.string(),
    description: z.string(),
    action: z.string(),
})
export const ItemSupplierForm = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    contact_person_name: z.string(),
    contact_person_phone: z.string(),
    contact_person_email: z.string(),
    description: z.string(),
    item_supplier: z.string(),
    contact_person: z.string(),
    action: z.string(),
})

//Lesson Plan
export const ManageLessonPlanForm = z.object({
    teachers: z.string(),
})
export const ManageSyllabusStatusForm = z.object({
    class: z.string(),
    section: z.string(),
    subject_group: z.string(),
    subject: z.string(),
    // lesson_topic: z.string(),
    // topic_completion_date: z.string(),
    // status: z.string(),
    // action: z.string(),
})
export const LessonForm = z.object({
    class: z.string(),
    section: z.string(),
    subject_group: z.string(),
    subject: z.string(),
    lesson_name: z.string(),
})
export const TopicForm = z.object({
    class: z.string(),
    section: z.string(),
    subject_group: z.string(),
    subject: z.string(),
    lesson: z.string(),
    topic_name: z.string(),
})

//Front Office
export const AdmissionEnquiryForm = z.object({
    source: z.string(),
    enquiry_from_date: z.string(),
    enquiry_to_date: z.string(),
    status: z.string(),
    name: z.string(),
    phone: z.string(),
    enquiry_date: z.string(),
    last_follow_up_date: z.string(),
    next_follow_up_date: z.string(),
    action: z.string(),
    email: z.string(),
    address: z.string(),
    description: z.string(),
    note: z.string(),
    date: z.string(),
    assigned: z.string(),
    reference: z.string(),
    class: z.string(),
    number_of_child: z.string(),
})
export const VisitorBookForm = z.object({
    purpose: z.string(),
    name: z.string(),
    phone: z.string(),
    id_card: z.string(),
    number_of_person: z.string(),
    date: z.string(),
    in_time: z.string(),
    out_time: z.string(),
    note: z.string(),
    attach_document: z.string(),
    action: z.string(),
})
export const PhoneCallLogForm = z.object({
    name: z.string(),
    phone: z.string(),
    date: z.string(),
    description: z.string(),
    next_follow_up_date: z.string(),
    call_duration: z.string(),
    note: z.string(),
    call_type: z.string(),
    action: z.string(),
})
export const PostalDispatchForm = z.object({
    to_title: z.string(),
    reference_no: z.string(),
    address: z.string(),
    note: z.string(),
    from_title: z.string(),
    date: z.string(),
    attach_document: z.string(),
    action: z.string(),
})
export const PostalReceiveForm = z.object({
    from_title: z.string(),
    reference_no: z.string(),
    address: z.string(),
    note: z.string(),
    to_title: z.string(),
    date: z.string(),
    attach_document: z.string(),
    action: z.string(),
})
export const ComplainForm = z.object({
    complain: z.string(),
    complain_type: z.string(),
    source: z.string(),
    complain_by: z.string(),
    phone: z.string(),
    date: z.string(),
    description: z.string(),
    action_taken: z.string(),
    assigned: z.string(),
    note: z.string(),
    attach_document: z.string(),
    action: z.string(),
})
export const SetupFrontOfficeForm = z.object({
    purpose: z.string(),
    description: z.string(),
    action: z.string(),
})
//Audit Trail Report

// export const AuditTrailReportForm = z.object{}
//Alumni
export const ManageAlumniForm = z.object({
    pass_out_session: z.string(),
    class: z.string(),
    section: z.string(),
    search_by_admission_number: z.string(),
})
export const EventsForm = z.object({
    event_title: z.string(),
    event_from_date: z.string(),
    event_to_date: z.string(),
    note: z.string(),
    event_notification_message: z.string(),
    email: z.string(),
    sms: z.string(),
    all_alumni: z.string(),
})

//Reports
//Student Information
export const StudentReportForm = z.object({
    class: z.string(),
    section: z.string(),
    category: z.string(),
    gender: z.string(),
    rte: z.string(),
})
export const ClassSectionReportForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const GuardianReportForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const StudentHistoryForm = z.object({
    class: z.string(),
    admission_year: z.string(),
})
export const StudentLoginCredentialForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const ClassSubjectReportForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const AdmissionReportForm = z.object({
    search_type: z.string(),
})
export const SiblingReportForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const StudentProfileForm = z.object({
    search_by_admission_date: z.string(),
    class: z.string(),
    section: z.string(),
})
export const HomeworkEvaluationReportForm = z.object({
    class: z.string(),
    section: z.string(),
    subject_group: z.string(),
    subject: z.string(),
})
//Attendace Report

export const StudentAttendanceTypeReportForm = z.object({
    search_type: z.string(),
    attendance_type: z.string(),
    class: z.string(),
    section: z.string(),
})

export const DailyAttendanceReportForm = z.object({
    date: z.string(),
})

//Finance
export const OnlineAdmissionFeesCollectionReportForm = z.object({
    search_type: z.string(),
})
export const ExpenseGroupReportForm = z.object({
    search_type: z.string(),
    search_expense_head: z.string(),
})
export const IncomeGroupReportForm = z.object({
    search_type: z.string(),
    search_income_head: z.string(),
})
export const ExpenseReportForm = z.object({
    search_type: z.string(),
})
export const IncomeReportForm = z.object({
    search_type: z.string(),
})
export const PayrollReportsForm = z.object({
    search_type: z.string(),
})
export const OnlineFeesCollectionReportForm = z.object({
    search_type: z.string(),
})
export const FeesCollectionReportForm = z.object({
    search_duration: z.string(),
    fees_type: z.string(),
    collect_by: z.string(),
    group_by: z.string(),
})
export const BalanceFeesReportForm = z.object({
    class: z.string(),
    section: z.string(),
})
export const FeesStatementForm = z.object({
    class: z.string(),
    section: z.string(),
    student: z.string(),
})
export const DailyCollectionReportForm = z.object({
    date_from: z.string(),
    date_to: z.string(),
})
export const BalanceFeesStatementForm = z.object({
    class: z.string(),
    section: z.string(),
})

export const TransportForm = z.object({
    class: z.string(),
    section: z.string(),
    route_title: z.string(),
    vehicle_number: z.string(),
})
export const HostelsForm = z.object({
    class: z.string(),
    section: z.string(),
    hostel_name: z.string(),
})
export const AlumniForm = z.object({
    pass_out_session: z.string(),
    class: z.string(),
    section: z.string(),
})

//Inventory
export const AddItemReportForm = z.object({
    search_type: z.string(),
})
export const IssueItemReportForm = z.object({
    search_type: z.string(),
})
export const StockReportForm = z.object({})

//Library
export const BookIssueReportForm = z.object({
    search_type: z.string(),
    members_type: z.string(),
})
export const BookDueReportForm = z.object({
    search_type: z.string(),
    members_type: z.string(),
})
export const BookInventoryReportForm = z.object({
    search_type: z.string(),
})
export const BookIssueReturnReportForm = z.object({})

//Human Resource Report
export const StaffReportForm = z.object({
    search_type: z.string(),
    status: z.string(),
    role: z.string(),
    designation: z.string(),
})
export const PayrollReportForm = z.object({
    role: z.string(),
    month: z.string(),
    year: z.string(),
})

//Lesson Plan Report
export const SubjectLessonPlanReportForm = z.object({
    class: z.string(),
    section: z.string(),
    subject_group: z.string(),
    subject: z.string(),
})
export const SyllabusStatusReportForm = z.object({
    class: z.string(),
    section: z.string(),
    subject_group: z.string(),
    subject: z.string(),
    sub_topic: z.string(),
})
//Online Examination Report
export const ResultReportForm = z.object({
    exam: z.string(),
    class: z.string(),
    section: z.string(),
})
export const ExamsReportForm = z.object({
    search_type: z.string(),
    date_type: z.string(),
})
export const ExamsAttemptReportForm = z.object({
    search_type: z.string(),
    date_type: z.string(),
})

export const ExamsRankReportForm = z.object({
    exam: z.string(),
    class: z.string(),
    section: z.string(),
})
//Examination Report
export const RankReportForm = z.object({
    exam_group: z.string(),
    exam: z.string(),
    session: z.string(),
    class: z.string(),
    section: z.string(),
})
//Login Credentials Send
export const LoginCredentialsSendForm = z.object({
    message_to: z.string(),
    notification_type: z.string(),
    section: z.string(),
    admission_no: z.string(),
    student_name: z.string(),
    class: z.string(),
    date_of_birth: z.string(),
    gender: z.string(),
    mobile_number: z.string(),
    aadhar_number: z.string(),
})
//Front CMS
export const EventForm = z.object({
    throwitle: z.string(),
    date: z.string(),
    venue: z.string(),
    action: z.string(),
    event_start: z.string(),
    event_end: z.string(),
})
export const GalleryForm = z.object({
    title: z.string(),
})
export const NewsForm = z.object({
    title: z.string(),
    date: z.string(),
})
export const PagesForm = z.object({
    title: z.string(),
    url: z.string(),
    page_type: z.string(),
    action: z.string(),
})
export const MenuForm = z.object({
    title: z.string(),
    menu: z.string(),
    description: z.string(),
    action: z.string(),
})
export const MediaManagerForm = z.object({
    upload_your_file: z.string(),
    upload_youtube_video: z.string(),
    search_by_file_name: z.string(),
    filter_by_file_type: z.string(),
})
//Communicate
//Send SMS
export const GroupSMSForm = z.object({
    title: z.string(),
    send_through: z.string(),
    template_id: z.string(),
    message: z.string(),
    message_to: z.string(),
})
export const IndividualForm = z.object({
    title: z.string(),
    send_through: z.string(),
    template_id: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
})
export const ClassSMSForm = z.object({
    title: z.string(),
    send_through: z.string(),
    template_id: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
})
export const TodayBirthdayForm = z.object({
    title: z.string(),
    send_through: z.string(),
    template_id: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
})
//Send Email
export const GroupEmailForm = z.object({
    title: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
    attachment: z.string(),
})
export const IndividualEmailForm = z.object({
    title: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
    attachment: z.string(),
})
export const ClassEmailForm = z.object({
    title: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
    attachment: z.string(),
})
export const TodayBirthdayEmailForm = z.object({
    title: z.string(),
    message: z.string(),
    message_to: z.string(),
    select: z.string(),
    attachment: z.string(),
})

//Notice Board
export const NoticeBoardForm = z.object({
    title: z.string(),
    notice_date: z.string(),
    publish_on: z.string(),
    message: z.string(),
    message_to: z.string(),
})

//Email / SMS Log
export const EmailSMSLogForm = z.object({})

// SLider Front CMS
export const SliderForm = z.object({
    meta_title: z.string(),
    meta_keyword: z.string(),
    meta_description: z.string(),
    image: z.string(),
})
//Banner images Front CMS
export const BannerImagesForm = z.object({})

//Front CMS
export const FrontCMSForm = z.object({
    filter_by_file_type: z.string(),
})

// User Log Report
export const StudentsUserLogForm = z.object({
    users: z.string(),
    role: z.string(),
    class: z.string(),
    ip_address: z.string(),
    login_time: z.string(),
    user_agent: z.string(),
})
export const StaffUserLogForm = z.object({
    users: z.string(),
    role: z.string(),
    ip_address: z.string(),
    login_time: z.string(),
    user_agent: z.string(),
})
export const ParentUserLogForm = z.object({
    users: z.string(),
    role: z.string(),
    ip_address: z.string(),
    login_time: z.string(),
    user_agent: z.string(),
})
