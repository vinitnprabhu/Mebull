'use client';

import {useForm} from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES } from "@/lib/constants";
import SelectField from "@/components/forms/SelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    }, );

    const onSubmit = async (data: SignUpFormData) => {}

    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullname"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{ message: 'Full Name is required'}}
                />
                <InputField
                    name="email"
                    label="Email"
                    placeholder="contant@email.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, messag: 'Email address is required'}}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.fullName}
                    validation={{ required: 'Password is required', minLength: 8}}
                />

                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select you investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating Account' : "Start Your Investing Journey"}
                </Button>

                <FooterLink text="Already have an account" linkText="Sign in" href="/sign-in" />
            </form>
        </>
    )
}

export default SignUpPage;