import { z } from 'zod'

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

export const SessionForm = z.object({
    name: z.string().min(1, { message: 'Session Name is required' }),
})
