import {Container} from '@/components/Container'
import Image from "next/future/image";
import backgroundImage from '@/images/background-faqs.jpg'


export function PrivacyPolicy() {
    return (
        <section
            id="privacypolicy"
            aria-labelledby="privacypolicy-title"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
            <Image
                className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 id="privacypolicy-title"  className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Privacy Policy
                    </h2>
                </div>
                <div>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">7x is a trading name of Mamluk Ltd., 483 Green Lanes, London, N13 4BS, United Kingdom.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">GDPR General Data Protection Regulation Act.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Data Controller Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Data Processor Data Processor means any natural or legal person who processes the data on behalf of the Data Controller.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Data Subject Data Subject is any living individual who is using our Service and is the subject of Personal Data.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">1. Principles for processing personal data
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Our principles for processing personal data are:

</p><p className="mt-4 text-lg tracking-tight text-slate-700">Fairness and lawfulness. When we process personal data, the individual rights of the Data Subjects must be protected. All personal data must be collected and processed in a legal and fair manner.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Restricted to a specific purpose. The personal data of Data Subject must be processed only for specific purposes.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Transparency. The Data Subject must be informed of how his/her data is being collected, processed and used.
</p><p className="mt-4 text-lg tracking-tight text-slate-700">2. What personal data we collect and process
</p><p className="mt-4 text-lg tracking-tight text-slate-700">7x collects several different types of personal data for various purposes. Personal Data may include, but is not limited to:

</p><p className="mt-4 text-lg tracking-tight text-slate-700">Email address
</p><p className="mt-4 text-lg tracking-tight text-slate-700">First name and last name
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Phone number
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Address, State, Province, ZIP/Postal code, City, Country
</p><p className="mt-4 text-lg tracking-tight text-slate-700">IP addresses
</p><p className="mt-4 text-lg tracking-tight text-slate-700">3. How we use the personal data
</p><p className="mt-4 text-lg tracking-tight text-slate-700">7x uses the collected personal data for various purposes:

</p><p className="mt-4 text-lg tracking-tight text-slate-700">To provide you with services
</p><p className="mt-4 text-lg tracking-tight text-slate-700">To notify you about changes to our services and/or products
</p><p className="mt-4 text-lg tracking-tight text-slate-700">To facilitate billing
</p><p className="mt-4 text-lg tracking-tight text-slate-700">To provide customer support
</p><p className="mt-4 text-lg tracking-tight text-slate-700">To gather analysis or valuable information so that we can improve our services
</p><p className="mt-4 text-lg tracking-tight text-slate-700">To detect, prevent and address technical issues and misue
</p><p className="mt-4 text-lg tracking-tight text-slate-700">4. Legal basis for collecting and processing personal data
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Our legal basis for collecting and using the personal data described in this Data Protection Policy depends on the personal data we collect and the specific context in which we collect the information:

</p><p className="mt-4 text-lg tracking-tight text-slate-700">7x needs to perform a contract with you
</p><p className="mt-4 text-lg tracking-tight text-slate-700">You have given 7x permission to do so
</p><p className="mt-4 text-lg tracking-tight text-slate-700">Processing your personal data is in 7x legitimate interests
</p><p className="mt-4 text-lg tracking-tight text-slate-700">7x needs to comply with the law
</p><p className="mt-4 text-lg tracking-tight text-slate-700">5. Retention of personal data
</p><p className="mt-4 text-lg tracking-tight text-slate-700">7x will retain your personal information only for as long as is necessary for the purposes set out in this Data Protection Policy.

</p><p className="mt-4 text-lg tracking-tight text-slate-700">7x will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

</p><p className="mt-4 text-lg tracking-tight text-slate-700">6. Data protection rights
</p><p className="mt-4 text-lg tracking-tight text-slate-700">If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what personal data we hold about you and if you want it to be removed from our systems, please contact us.

</p><p className="mt-4 text-lg tracking-tight text-slate-700">In certain circumstances, you have the following data protection rights:

</p><p className="mt-4 text-lg tracking-tight text-slate-700">The right to access, update or to delete the information we have on you
</p><p className="mt-4 text-lg tracking-tight text-slate-700">The right of rectification
</p><p className="mt-4 text-lg tracking-tight text-slate-700">The right to object
</p><p className="mt-4 text-lg tracking-tight text-slate-700">The right of restriction
</p><p className="mt-4 text-lg tracking-tight text-slate-700">The right to data portability
</p><p className="mt-4 text-lg tracking-tight text-slate-700">The right to withdraw consent

                    </p>


                </div>
            </Container>
        </section>
    )
}
