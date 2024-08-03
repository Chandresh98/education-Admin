import { InstituteGroupType } from '@/Schemas/Schema'
import { title } from 'process'
import { string } from 'zod'

export type InstituteGroupParams = {
    name: string
    domain: string
    code?: string
    description: string
    about?: string
    address: string
    city: string
    state: string
    pincode: number
    phone: string
    email: string
    contact_person_name: string
    contact_person_email?: string
    contact_person_phone: string
    website_url?: string
    established_year?: string
    logo_url?: FileList
    logo_small_url?: FileList
    favicon_url?: FileList
    type: InstituteGroupType
    password: string
    confirm_password?: string
}

export type SectionParams = {
    name: string
    description?: string
}

export type SessionParams = {
    name: string
    status?: boolean
}
export type LanguageParams = {
    name: string
    slug: string
    country_code: string
    status?: boolean
}
export type InstituteParams = {
    university: string
    session: string
    attendance_type: string
    timezone: string
    currency: string
    currency_symbol: string
    currency_symbol_option: string
    biometric: boolean
    biometric_type: string
    biometric_device_ids: string
    footer_text: string
    admission_number_auto_generate: boolean
    admission_number_suffix: string
    admission_number_digits: string
    admission_number_start_from: string
    staff_id_number_auto_generate: boolean
    staff_id_number_suffix: string
    staff_id_number_digits: string
    staff_id_number_start_form: string
    duplicate_fee_receipt: boolean
    number_of_fee_receipt: string
    language: string
    session_start_month: string
    week_start_from: string
    status?: boolean
}
export type RoleParams = {
    name: string
    type: string
    status?: boolean
}
export type ModulesParams = {
    name: string
    status?: boolean
}
export type UserStaffParams = {
    staff_id: string
    name: string
    role: string
    designation: string
    department: string
    actions: string
    update: string
}
export type UserParentParams = {
    name: string
    phone: string
    address: string
    actions: string
    update: string
}
export type UserStudentParams = {
    admission_id: string
    name: string
    class_and_section: string
    father_name: string
    phone: string
    actions: string
    update: string
}

export type DisableReasonParams = {
    name: string
    status?: boolean
}
export type StudentCategoryParams = {
    name: string
    code: string
    status?: boolean
}
export type StudentHouseParams = {
    name: string
    code: string
    status?: boolean
}
export type DepartmentParams = {
    name: string
    status?: boolean
}
export type DesignationParams = {
    name: string
    status?: boolean
}
export type LeaveTypesParams = {
    name: string
    status?: boolean
}
export type FormGroupParams = {
    name: string
    status?: boolean
}
export type CustomFieldsParams = {
    belongs: string
    name: string
    from_group: string
    type: string
    column: string
    is_required: string
    options_teaxarea: string
    visible_on_table: string
    actions: string
    status?: boolean
}
export type StaffShiftParams = {
    name: string
    start_time: string
    end_time: String
    status?: boolean
}
export type AssignShifttostaffParams = {
    shift: string
    staff_select: string
    status?: boolean
}
export type AllowanceParams = {
    name: string
    status?: boolean
}
export type DeductionParams = {
    name: string
    status?: boolean
}
export type SMSSettingParams = {
    api_key: string
    sender_id: string
    status: string
}
export type EmailSettingParams = {
    smpt_username: string
    smpt_password: string
    smpt_server: string
    smpt_port: string
    smpt_security: string
    smpt_auth: string
}
export type PaymentGatewayParams = {
    select_gateway: string
    api_key: string
    secret_key: string
    merchant_id: string
    merchant_key: string
    auth_token: string
    website: string
    status: string
}
export type FrontCMSSettingParams = {
    // front_cms: string
    // sidebar: string
    // language_rtl_text_mode: string
    sidebar_option: string
    logo: string
    favicon: string
    footer_text: string
    cookie_consent: string
    google_analytics: string
    whatsapp_url: string
    facebook_url: string
    twitter_url: string
    youtube_url: string
    google_url: string
    linkedin_url: string
    instagram_url: string
    pinterest_url: string
}
// setting
export type OnlineAdmissionSettingParams = {
    online_admission: string
    online_admission_payment_option: string
    online_admission_form_fees: string
    name: string
    action: string
}
export type PayslipParams = {
    header_image: string
    footer_content: string
}
export type OnlineAdmissionReceiptParams = {
    header_image: string
    footer_content: string
}
export type FeesReceiptParams = {
    header_image: string
    footer_content: string
}
// Hostel
export type HostelParams = {
    name: string
    hostel_type: string
    total_rooms: string
    total_beds: string
    warden: string
    action: string
    status?: boolean
}
export type HostelRoomsParams = {
    name: string
    hostel: string
    number_of_beds: string
    occupation_status: string
    vacant_beds: string
    floor: string
    actions: string
    status?: boolean
}
export type HostelRoomAllocationParams = {
    hostel_room: string
    student: string
    from_date: string
    to_date: string
    actions: string
    status?: boolean
}
export type VisitorLogParams = {
    hostel: string
    name: string
    mobile_number: string
    purpose: string
    date: string
    in_time: string
    out_time: string
    status?: boolean
}
// HR
export type StaffParams = {
    staff_id: string
    first_name: string
    middle_name: string
    last_name: string
    designation: string
    department: string
    role: string
    mobile_number: string
    email: string
    date_of_birth: string
    gender: string
    marital_status: string
    blood_group: string
    date_of_joining: string
    current_address: string
    permanent_address: string
    qualifications: string
    experience: string
    photo: string
    leaves_with_leave_type_and_leaves: string
    allowance_with_allowance_and_amount: string
    deduction_with_deduction_and_amount: string
    custom_fields: string
    status?: string
    full_name: string
}
export type DisableStaffParams = {
    staff_id: string
    first_name: string
    middle_name: string
    last_name: string
    designation: string
    department: string
    role: string
    mobile_number: string
    email: string
    date_of_birth: string
    gender: string
    marital_status: string
    blood_group: string
    date_of_joining: string
    current_address: string
    permanent_address: string
    qualifications: string
    experience: string
    photo: string
    leaves_with_leave_type_and_leaves: string
    allowance_with_allowance_and_amount: string
    deduction_with_deduction_and_amount: string
    custom_fields: string
    full_name: string
    search_by_keyword: string
    status?: string
}
export type StaffLeaveApplyParams = {
    staff: string
    leave_type: string
    from_date: string
    to_date: string
    reason: string
    date: string
    leave_status: string
    status?: boolean
}
export type ApproveLeaveParams = {
    staff: string
    leave_type: string
    from_date: string
    to_date: string
    date: string
    leave_status: string
    status?: boolean
}
export type StaffAttendanceParams = {
    date: string
    clock_in_time: string
    clock_out_time: string
    attendance_status: string
    reason: string
    out_time: string
    status?: boolean
}
export type PayrollParams = {
    year: string
    month: string
    staff: string
    staff_id: string
    name: string
    role: string
    department: string
    designation: string
    phone: string
    status: string
    action: string
}
export type TeacherRatingParams = {
    staff: string
    rating_from: string
    rating_by: string
    rating: string
    comment: string
    rating_status: string
}
// Transport Module
export type VehiclesParams = {
    name: string
    vehicle_code: string
    number_plate: string
    capacity: string
    vehicles_type: string
    chassis_number: string
    model: string
    make_year: string
    purchase_type: string
    purchase_date: string
    code: string
    number: string
    type: string
    status: string
}
export type StopsParams = {
    name: string
    address: string
    latitude: string
    longitude: string
    status: string
}
export type RouteParams = {
    name: string
    start_point: string
    end_point: string
    select_stops: string
    status: string
}
export type VehicleAssignmentParams = {
    vehicle: string
    driver: string
    route: string
    date: string
    out_time: string
    in_time: string
}
export type TripLogsParams = {
    vehicle: string
    driver: string
    route: string
    date: string
    out_time: string
    in_time: string
}
export type VehicleMaintenanceParams = {
    vehicle: string
    date: string
    description: string
    amount: string
}
export type VehicleFuelParams = {
    vehicle: string
    date: string
    fuel_type: string
    quantity: string
    unit: string
    unit_price: string
    total_amount: string
}

// Academic Module

export type SectionsParams = {
    name: string
    status?: boolean
}

export type ClassParams = {
    name: string
    select_section: string
    status?: boolean
}

export type SubjectParams = {
    name: string
    code: string
    type: string
}

export type SubjectGroupParams = {
    name: string
    class: string
    sections: string
    subjects: string
}
export type PromoteStudentParams = {
    class: string
    section: string
    promote_in_session: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    current_result: string
    next_session_status: string
}
export type AssignClassTeacherParams = {
    class: string
    section: string
    teacher: string
}
export type HomeworkParams = {
    title: string
    description: string
    class: string
    section: string
    subject: string
    date: string
    due_date: string
}

// student managemnet
export type StudentAdmissionParams = {
    roll_number: string
    admission_date: string
    admission_number: string
    class: string
    section: string
    sibling: string
    student_category: string
    student_house: string
    first_name: string
    middle_name: string
    last_name: string
    mobile_number: string
    email: string
    gender: string
    blood_group: string
    photo: string
    date_of_birth: string
    father_occupation: string
    father_email: string
    father_name: string
    father_phone: string
    father_qualification: string
    father_photo: string
    mother_name: string
    mother_occupation: string
    mother_email: string
    mother_phone: string
    mother_qualification: string
    mother_photo: string
    guardian_is: string
    guardian_relation: string
    guardian_name: string
    guardian_occupation: string
    guardian_phone: string
    guardian_qualification: string
    guardian_photo: string
    custom_fields: string
}
export type StudentDetailParams = {
    class: string
    section: string
    search_by_keyword: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
    adhaar_number: string
    action: string
}
export type DisableStudentParams = {
    class: string
    section: string
    search_by_keyword: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
    adhaar_number: string
    action: string
}
export type BulkDeleteParams = {
    class: string
    section: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
    adhaar_number: string
}

export type StudentAttendanceParams = {
    class: string
    section: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
    adhaar_number: string
}
export type OnlineAdmissionParams = {
    reference_no: string
    class: string
    section: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    student_mobile_number: string
    form_status: string
    enrolled: string
    payment_status: string
    action: string
}
export type StudentLeaveRequestParams = {
    student: string
    title: string
    date: string
    reason: string
    from_date: string
    to_date: string
    class: string
    section: string
}

// Finance

export type BudgetTypeParams = {
    name: string
    description: string
    status: boolean
}
export type BudgetParams = {
    budget_type: string
    department: string
    amount_allocated: string
    amount_spent: string
    amount_remaining: string
    status: boolean
}
export type ExpenseTypeParams = {
    name: string
    description: string
    status: boolean
}
export type ExpenseParams = {
    expense_type: string
    description: string
    amount: string
    date: string
    created_by: string
    updated_by: string
}
export type FeeDiscountParams = {
    name: string
    discount_code: string
    discount_type: string
    discount_amount: string
    status: boolean
}
export type FeeGroupParams = {
    name: string
    due_date: string
    status: boolean
}
export type FeeTypeParams = {
    name: string
    status: boolean
}

// Examination

export type TermParams = {
    name: string
    status: boolean
}
export type ExamParams = {
    term: string
    name: string
    maximum_mark: string
    practical: string
    status: boolean
}
export type GradeTypeParams = {
    name: string
    status: boolean
}
export type GradeParams = {
    grade_type: string
    name: string
    gpa: string
    percentage_from: string
    percentage_to: string
    gpa_from: string
    gpa_to: string
    status: boolean
}
export type ExamScheduleParams = {
    exam: string
    class: string
    section: string
    subject: string
    date: string
    start_time: string
    end_time: string
    max_practical_marks: string
    max_theory_marks: string
    min_practical_marks: string
    min_theory_marks: string
}
export type ExamMarksParams = {
    term: string
    exam: string
    class: string
    section: string
    subject: string
    absent: boolean
    theory_marks: string
    practical_mark: string
    comment: string
    remark: string
}
export type MarksCardSettingParams = {
    student_profile: string
    report_card_title: string
    student_profile_text: string
    academic_text: string
    attendance_label: string
    grade_label: string
    grade_range: string
    obtained_marks: string
    percentage_range: string
    result: string
    total_marks: string
    overall_marks: string
    overall_grade: string
    performance: string
    percentage: string
    marksheet_date: string
    parent_sign: string
    discipline: string
    co_scholastic_areas: string
    principal_sign: string
    teacher_sign: string
    min_passign_percentage: string
    marksheet_distrubution_date: string
    instructions: string
    is_attendance: string
    is_grade_range_row: string
    is_parent_sign: string
    is_final_grade_column: string
    is_result_percentage_column: string
    is_exam_group_name: string
    is_unconducted_exam: string
    is_discipline_card: string
    is_percentage_range: string
    is_instuctions: string
    is_obtained_marks: string
    is_result: string
    is_attendance_total: string
    is_co_scholastic_areas: string
    is_student_sign: string
    is_grade_column: string
    is_rank: string
    marksheet_template: string
}

// Library

export type MemberParams = {
    member_type: string
    student: string
    staff: string
    member_id: string
    fine_amount: string
    status: boolean
}
export type BookCategoryParams = {
    name: string
    status: boolean
}
export type BookParams = {
    book_category: string
    subject: string
    language: string
    name: string
    isbn_no: string
    author: string
    publisher: string
    edition: string
    published_year: string
    price: string
    quantity: string
    rack: string
    row: string
    column: string
    status: boolean
}
export type LibrarySettingParams = {
    return_due_days: string
    max_book_limit: string
    fine_amount_per_day: string
    fine_start_day_after_due_days: string
    max_number_of_due_allowed: string
    block_membership_after_fine_amount_Reach: string
}
export type BookTransactionParams = {
    book: string
    member_Id: string
    member_name: string
    member_type: string
    issued_date: string
    return_date: string
    member: string
    issue_date: string
}

// Cerificate

export type TemplateParams = {
    belongs_to: string
    type: string
    name: string
    page_layout: string
    is_qr_code: string
    qr_code: string
    user_photo: string
    photo_size: string
    layout_space_top: string
    layout_space_bottom: string
    layout_space_right: string
    layout_space_left: string
    signature_image_principal: string
    signature_image_teacher: string
    logo_image: string
    background: string
    content: string
    status: boolean
}
export type GenerateStaffCertificateParams = {
    certificate: string
    search_after_list: string
    select_staff: string
    staff_name: string
    role: string
    designation: string
    department: string
    father_name: string
    mother_name: string
    date_of_joining: string
    phone: string
    date_of_birth: string
}
export type GenerateStaffIDParams = {
    certificate: string
    search_after_list: string
    select_staff: string
    staff_Id: string
    staff_name: string
    role: string
    designation: string
    department: string
    father_name: string
    mother_name: string
    date_of_joining: string
    phone: string
    date_of_birth: string
}

export type GenerateStudentCertificateParams = {
    class: string
    section: string
    certificate: string
    search_after_list: string
    select_student: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
}

export type GenerateStudentIDParams = {
    class: string
    section: string
    certificate: string
    search_after_list: string
    select_student: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
}

// Time Table

export type TimeTableParams = {
    class: string
    section: string
    week_wise: string
    // search_after_list: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
}
export type StudentTimeTableParams = {
    class: string
    section: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
}
export type TeacherTimeTableParams = {
    teacher: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
}

//Download center
export type UploadContentParams = {
    content_title: string
    type: string
    date: string
    content_type: string
    available_for: string
    available_for_all_class: string
    section: string
    upload_date: string
    description: string
    content_file: string
    class: string
    action: string
}
export type AssignmentsParams = {
    content_title: string
    type: string
    date: string
    available_for: string
    action: string
}
export type StudyMaterialParams = {
    content_title: string
    type: string
    date: string
    available_for: string
    action: string
}
export type SyllabusParams = {
    content_title: string
    type: string
    date: string
    available_for: string
    action: string
}
export type OtherDownloadsParams = {
    content_title: string
    type: string
    date: string
    available_for: string
    action: string
}

//Inventory

export type IssueItemParams = {
    item: string
    item_category: string
    issue_Return: string
    issue_to: string
    issue_by: string
    quantity: string
    status: string
    action: string
}
export type AddItemStockParams = {
    name: string
    category: string
    item_category: string
    item: string
    supplier: string
    store: string
    quantity: string
    purchase_price: string
    date: string
    attach_document: string
    description: string
    action: string
}
export type AddItemParams = {
    item: string
    item_category: string
    unit: string
    category: string
    description: string
    available_quantity: string
    action: string
}
export type ItemCategoryParams = {
    item_category: string
    description: string
    action: string
}
export type ItemStoreParams = {
    item_store_name: string
    item_stock_code: string
    description: string
    action: string
}
export type ItemSupplierParams = {
    name: string
    phone: string
    email: string
    address: string
    contact_person_name: string
    contact_person_phone: string
    contact_person_email: string
    description: string
    item_supplier: string
    contact_person: string
    action: string
}

//Lesson Plan
export type ManageLessonPlanParams = {
    teachers: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
}
export type ManageSyllabusStatusParams = {
    class: string
    section: string
    subject_group: string
    subject: string
    lesson_topic: string
    topic_completion_date: string
    status: string
    action: string
}
export type LessonParams = {
    class: string
    section: string
    subject_group: string
    subject: string
    lesson_name: string
    action: string
}
export type TopicParams = {
    class: string
    section: string
    subject_group: string
    subject: string
    lesson: string
    topic_name: string
    action: string
}
//Front Office
export type AdmissionEnquiryParams = {
    source: string
    enquiry_from_date: string
    enquiry_to_date: string
    status: string
    name: string
    phone: string
    enquiry_date: string
    last_follow_up_date: string
    next_follow_up_date: string
    action: string
    email: string
    address: string
    description: string
    note: string
    date: string
    assigned: string
    reference: string
    class: string
    number_of_child: string
}
export type VisitorBookParams = {
    purpose: string
    name: string
    phone: string
    id_card: string
    number_of_person: string
    date: string
    in_time: string
    out_time: string
    note: string
    attach_document: string
    action: string
}
export type PhoneCallLogParams = {
    name: string
    phone: string
    date: string
    description: string
    next_follow_up_date: string
    call_duration: string
    note: string
    call_type: string
    action: string
}
export type PostalDispatchParams = {
    to_title: string
    reference_no: string
    address: string
    note: string
    from_title: string
    date: string
    attach_document: string
    action: string
}
export type PostalReceiveParams = {
    from_title: string
    reference_no: string
    address: string
    note: string
    to_title: string
    date: string
    attach_document: string
    action: string
}
export type ComplainParams = {
    complain: string
    complain_type: string
    name: string
    source: string
    complain_by: string
    phone: string
    date: string
    description: string
    action_taken: string
    assigned: string
    note: string
    attach_document: string
    action: string
}
//Front Office SET Front Office
export type PurposeParams = {
    purpose: string
    description: string
    action: string
}
export type ComplainTypeParams = {
    complain_type: string
    description: string
    action: string
}
export type ReferenceParams = {
    reference: string
    description: string
    action: string
}
export type SourceParams = {
    source: string
    description: string
    action: string
}

//Alumni
export type ManageAlumniParams = {
    pass_out_session: string
    section: string
    search_by_admission_number: string
    admission_no: string
    student_name: string
    class: string
    gender: string
    current_email: string
    current_phone: string
    action: string
}
export type EventsParams = {
    event_title: string
    event_from_date: string
    event_to_date: string
    note: string
    event_notification_message: string
    email: string
    sms: string
    class: string
    section: string
    pass_out_session: string
    from: string
    to: string
    all_alumni: string
    action: string
}

//Reports
//Student Information
export type StudentReportParams = {
    class: string
    section: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    gender: string
    category: string
    mobile_number: string
    local_identification_number: string
    national_identification_number: string
    rte: string
}
export type ClassSectionReportParams = {
    s_no: string
    class: string
    student: string
    action: string
}
export type GuardianReportParams = {
    class: string
    section: string
    class_section: string
    admission_no: string
    student_name: string
    mobile_number: string
    guardian_name: string
    guardian_relation: string
    father_name: string
    father_phone: string
    mother_name: string
    mother_phone: string
}
export type StudentHistoryParams = {
    class: string
    admission_year: string
    admission_no: string
    student_name: string
    admission_date: string
    class_start_end: string
    session_start_end: string
    year: string
    mobile_number: string
    guardian_name: string
    guardian_phone: string
}
export type StudentLoginCredentialParams = {
    class: string
    section: string
    admission_no: string
    student_name: string
    user_name: string
    password: string
    parent_user_name: string
    parent_password: string
}
export type ClassSubjectReportParams = {
    class: string
    section: string
    subject: string
    teacher: string
    time: string
    room_no: string
}
export type AdmissionReportParams = {
    search_type: string
    admission_no: string
    student_name: string
    class: string
    father_name: string
    date_of_birth: string
    admission_date: string
    gender: string
    category: string
    mobile_number: string
}
export type SiblingReportParams = {
    section: string
    father_name: string
    mother_name: string
    guardian_name: string
    guardian_phone: string
    student_name: string
    class: string
    admission_date: string
    gender: string
}
export type StudentProfileParams = {
    search_by_admission_date: string
    admission_no: string
    roll_number: string
    class: string
    section: string
    first_name: string
    middle_name: string
    last_name: string
    gender: string
    date_of_birth: string
    category: string
    religion: string
    caste: string
    mobile_number: string
    email: string
    admission_date: string
    blood_group: string
    student_house: string
    height: string
    weight: string
    as_on_date: string
    fees_discount: string
    father_name: string
    father_phone: string
    father_occupation: string
    mother_name: string
    if_guardian_is: string
    guardian_name: string
    guardian_relation: string
    guardian_phone: string
    guardian_occupation: string
    guardian_email: string
    guardian_address: string
    permanent_address: string
    route_list: string
    hostel_details: string
    room_no: string
    bank_account_number: string
    bank_name: string
    ifsc_code: string
    national_identification_number: string
    local_identification_number: string
    rte: string
    previous_school_details: string
    note: string
}
export type HomeworkEvaluationReportParams = {
    class: string
    section: string
    subject_group: string
    subject: string
    homework_date: string
    submission_date: string
    complete_incomplete: string
    complete: string
}
export type StudentGenderRatioReportParams = {
    class_section: string
    total_boys: string
    total_girls: string
    total_students: string
    boys_girls_ratio: string
}
export type StudentTeacherRatioReportParams = {
    class_section: string
    total_students: string
    total_assigned_teachers: string
    student_teacher_ratio: string
}
//Attendace Report
export type StudentAttendanceTypeReportParams = {
    search_type: string
    attendance_type: string
    class: string
    section: string
    admission_no: string
    student_name: string
    father_name: string
    date_of_birth: string
    admission_date: string
    gender: string
    mobile_number: string
}
export type DailyAttendanceReportParams = {
    date: string
    class_section: string
    total_present: string
    total_absent: string
    present: string
    absent: string
}

//Finance

export type OnlineAdmissionFeesCollectionReportParams = {
    search_type: string
}
export type ExpenseGroupReportParams = {
    search_type: string
    search_expense_head: string
    expense_head: string
    expense_id: string
    name: string
    date: string
    invoice_number: string
    amount: string
}
export type IncomeGroupReportParams = {
    search_type: string
    search_income_head: string
    income_head: string
    income_id: string
    name: string
    date: string
    invoice_number: string
    amount: string
}
export type PayrollReportsParams = {
    search_type: string
    name: string
    role: string
    designation: string
    month_year: string
    payslip: string
    basic_salary: string
    earning: string
    deduction: string
    gross_salary: string
    tax: string
    net_salary: string
}
export type ExpenseReportParams = {
    search_type: string
    date: string
    expense_head: string
    name: string
    invoice_number: string
    amount: string
}
export type IncomeReportParams = {
    search_type: string
    name: string
    invoice_number: string
    income_head: string
    date: string
    amount: string
}
export type OnlineFeesCollectionReportParams = {
    search_type: string
    payment_id: string
    date: string
    admission_no: string
    name: string
    class: string
    fees_type: string
    mode: string
    amount: string
    discount: string
    fine: string
    total: string
}
export type FeesCollectionReportParams = {
    search_duration: string
    fees_type: string
    collect_by: string
    group_by: string
    payment_id: string
    date: string
    admission_no: string
    name: string
    class: string
    mode: string
    amount: string
    discount: string
    fine: string
    total: string
}
export type BalanceFeesReportParams = {
    class: string
    section: string
    student_name: string
    admission_no: string
    roll_number: string
    father_name: string
    total_fees: string
    paid_fees: string
    discount: string
    fine: string
    balance: string
}
export type FeesStatementParams = {
    class: string
    section: string
    student: string
    fees_group: string
    fees_code: string
    due_date: string
    status: string
    amount: string
    payment_id: string
    mode: string
    date: string
    discount: string
    fine: string
    paid: string
    balance: string
}
export type DailyCollectionReportParams = {
    date_from: string
    date_to: string
    date: string
    total_transactions: string
    amount: string
    action: string
}
export type BalanceFeesStatementParams = {
    class: string
    section: string
    fees_group: string
    fees_code: string
    due_date: string
    status: string
    amount: string
    payment_id: string
    mode: string
    date: string
    discount: string
    fine: string
    paid: string
    balance: string
}

//Inventory
export type StockReportParams = {
    name: string
    category: string
    supplier: string
    store: string
    available_quantity: string
    total_quantity: string
    total_issued: string
}
export type AddItemReportParams = {
    search_type: string
    name: string
    category: string
    supplier: string
    store: string
    quantity: string
    purchase_price: string
    date: string
}
export type IssueItemReportParams = {
    search_type: string
    item: string
    item_category: string
    issue_return: string
    issue_to: string
    issued_by: string
    quantity: string
}

//Library
export type BookIssueReportParams = {
    search_type: string
    members_type: string
    book_title: string
    book_number: string
    issue_date: string
    due_return_date: string
    member_id: string
    library_card_no: string
    admission_no: string
    issue_by: string
}
export type BookDueReportParams = {
    search_type: string
    members_type: string
    book_title: string
    book_number: string
    issue_date: string
    due_return_date: string
    member_id: string
    library_card_no: string
    admission_no: string
    issue_by: string
}
export type BookInventoryReportParams = {
    search_type: string
    book_title: string
    book_number: string
    isbn_number: string
    publisher: string
    author: string
    subject: string
    rack_number: string
    qty: string
    available: string
    issued: string
    book_price: string
    post_date: string
    action: string
}
export type BookIssueReturnReportParams = {
    book_title: string
    book_number: string
    issue_date: string
    return_date: string
    member_id: string
    library_card_no: string
    admission_no: string
    issue_by: string
}

export type TransportParams = {
    class_section: string
    class: string
    section: string
    admission_no: string
    student_name: string
    mobile_number: string
    father_name: string
    father_phone: string
    mother_name: string
    mother_phone: string
    route_title: string
    vehicle_number: string
    driver_name: string
    driver_contact: string
    fare: string
}
export type HostelsParams = {
    class: string
    section: string
    class_section: string
    admission_no: string
    student_name: string
    mobile_number: string
    guardian_phone: string
    hostel_name: string
    room_number_name: string
    room_type: string
    cost_per_bed: string
}
export type AlumniParams = {
    pass_out_session: string
    admission_no: string
    student_name: string
    class: string
    section: string
    gender: string
    current_email: string
    date_of_birth: string
    current_address: string
    occupation: string
    current_phone: string
}
export type UserLogParams = {
    users: string
    role: string
    class: string
    ip_address: string
    login_time: string
    user_agent: string
}

//Audit Trail Report

export type AuditTrailReportParams = {
    message: string
    users: string
    ip_address: string
    action: string
    platform: string
    agent: string
    date: string
    time: string
}

//Human Resource Report
export type StaffReportParams = {
    search_type: string
    status: string
    role: string
    designation: string
    staff_id: string
    department: string
    name: string
    father_name: string
    mother_name: string
    email: string
    gender: string
    date_of_birth: string
    date_of_joining: string
    phone: string
    emergency_contact_number: string
    marital_status: string
    current_address: string
    permanent_address: string
    qualification: string
    work_experience: string
    note: string
    epf_no: string
    basic_salary: string
    contract_type: string
    work_shift: string
    location: string
    leaves: string
    account_title: string
    bank_account_number: string
    bank_name: string
    ifsc_code: string
    bank_branch_name: string
    social_media_link: string
}
export type PayrollReportParams = {
    role: string
    month: string
    year: string
    name: string
    designation: string
    month_year: string
    payslip: string
    basic_salary: string
    earning: string
    deduction: string
    gross_salary: string
    tax: string
    net_salary: string
}

//Lesson Plan Report
export type SubjectLessonPlanReportParams = {
    class: string
    section: string
    subject_group: string
    subject: string
    teacher: string
    lesson_name: string
    topic_name: string
    sub_topic: string
    date: string
    time_from: string
    time_to: string
    action: string
}
export type SyllabusStatusReportParams = {
    class: string
    section: string
    subject_group: string
    subject: string
    teacher: string
    lesson: string
    topic: string
    action: string
}
//Online Examination Report
export type ResultReportParams = {
    exam: string
    class: string
    section: string
    admission_no: string
    student_name: string
    total_attempt: string
    remaining_attempt: string
    exam_submitted: string
    action: string
}
export type ExamsReportParams = {
    search_type: string
    date_type: string
    exam: string
    attempt: string
    exam_from: string
    exam_to: string
    duration: string
    student: string
    questions: string
    exam_publish: string
    result_publish: string
}
export type ExamsAttemptReportParams = {
    search_type: string
    date_type: string
    student: string
    admission_no: string
    class: string
    section: string
    exam: string
    exam_from: string
    exam_to: string
    duration: string
    exam_publish: string
    result_publish: string
}
export type ExamsRankReportParams = {
    exam: string
    class: string
    section: string
}
//Examnination Report
export type RankReportParams = {
    exam_group: string
    exam: string
    session: string
    class: string
    section: string
    rank: string
    admission_no: string
    roll_number: string
    student_name: string
    kannada: string
    grand_total: string
    percent: string
    result: string
}

//Front CMS
export type EventParams = {
    title: string
    date: string
    venue: string
    action: string
    event_start: string
    event_end: string
}
export type GalleryParams = {
    title: string
    url: string
    action: string
}
export type NewsParams = {
    title: string
    url: string
    action: string
    date: string
}
export type PagesParams = {
    title: string
    url: string
    page_type: string
    action: string
}
export type MenuParams = {
    title: string
    menu: string
    description: string
    action: string
}
export type MediaManagerParams = {
    upload_your_file: string
    upload_youtube_video: string
    search_by_file_name: string
    filter_by_file_type: string
}
//Communicate
//Send SMS
export type GroupSMSParams = {
    title: string
    send_through: string
    template_id: string
    message: string
    message_to: string
}
export type IndividualParams = {
    title: string
    select: string
    send_through: string
    template_id: string
    message: string
    message_to: string
}

export type ClassSMSParams = {
    title: string
    select: string
    send_through: string
    template_id: string
    message: string
    message_to: string
}
export type TodayBirthdayParams = {
    title: string
    select: string
    send_through: string
    template_id: string
    message: string
    message_to: string
}

//Send Email
export type GroupEmailParams = {
    title: string
    message: string
    message_to: string
    attachment: string
}
export type IndividualEmailParams = {
    title: string
    select: string
    message: string
    message_to: string
    attachment: string
}

export type ClassEmailParams = {
    title: string
    select: string
    message: string
    message_to: string
    attachment: string
}
export type TodayBirthdayEmailParams = {
    title: string
    select: string
    message: string
    message_to: string
    attachment: string
}
//Notice Board
export type NoticeBoardParams = {
    title: string
    notice_date: string
    publish_on: string
    message: string
    message_to: string
}
// EMail SMS Log
export type EmailSMSLogParams = {
    title: string
    date: string
    email: string
    sms: string
    group: string
    individual: string
    class: string
}

//Login Credentials Send
export type LoginCredentialsSendParams = {
    select_all: boolean
    message_to: string
    notification_type: string
    section: string
    admission_no: string
    student_name: string
    class: string
    date_of_birth: string
    gender: string
    mobile_number: string
    aadhar_number: string
}

//Slider Front CMS
export type SliderParams = {
    meta_title: string
    meta_keyword: string
    meta_description: string
    image: string
}

//Banner Images Front Images
export type BannerImagesParams = {}

// Front CMS
export type FrontCMSParams = {
    filter_by_file_type: string
}
// User Log Report
export type StudentsUserLogParams = {
    users: string
    role: string
    class: string
    ip_address: string
    login_time: string
    user_agent: string
}
export type StaffUserLogParams = {
    users: string
    role: string
    ip_address: string
    login_time: string
    user_agent: string
}
export type ParentUserLogParams = {
    users: string
    role: string
    ip_address: string
    login_time: string
    user_agent: string
}
