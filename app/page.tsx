import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ImageWrapper } from "@/components/ImageWrapper";
import { MentorshipItem } from "@/components/MentorshipItem";
import { SectionTextContent } from "@/components/SectionTextContent";
import { Typography } from "@/components/Typography";
import { BUTTON_VARIANT } from "@/constants/buttonVariants";
import { TYPOGRAPHY_TAG_VARIANT } from "@/constants/typographyVariants";
import GridLayout from "@/layouts/GridLayout";

export default function Home() {
  return (
    <div className="homepage flex flex-col gap-24">
      <section className="section section-hero">
        <Container>
          <GridLayout>
            <SectionTextContent className="col-span-3 w-full max-w-[92%] mt-16">
              <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </SectionTextContent>

            <div className="col-span-5 w-full h-fit max-w-[80%] mx-auto relative">
              <ImageWrapper src="images/image_1.jpg" alt="image_1" />

              <Typography
                className="absolute left-0 bottom-0 font-bold -translate-x-[70%] translate-y-[40%] !text-[120px] leading-28"
                content={
                  <p>
                    Interi<span className="text-white">or</span>
                    <br />
                    Design
                  </p>
                }
              />
            </div>

            <SectionTextContent className="col-span-4 max-w-[88%] ml-auto">
              <Typography
                className="!text-xl uppercase tracking-wider"
                content="Our Recent Work"
                variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
              />

              <Typography
                content="We Will Make These Unique Tastes of Yours a design reality!"
                variant={TYPOGRAPHY_TAG_VARIANT.HEAD_3}
              />

              <Button
                className="w-fit uppercase"
                label="View Project"
                variant={BUTTON_VARIANT.BORDERED}
              />

              <div className="w-full mt-8">
                <ImageWrapper src="images/image_2.jpg" alt="image_2" />
              </div>
            </SectionTextContent>
          </GridLayout>
        </Container>
      </section>

      <section className="section section-introduction">
        <Container>
          <GridLayout>
            <div className="col-span-4">
              <ImageWrapper src="images/image_3.jpg" alt="image_3" />
            </div>

            <SectionTextContent className="col-span-8 ml-auto">
              <Typography
                className="!text-xl uppercase tracking-wider"
                content="WHO WE ARE"
                variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
              />

              <Typography
                className="max-w-[50%]"
                content="Exterior & Interior"
                variant={TYPOGRAPHY_TAG_VARIANT.HEAD_2}
              />

              <Typography
                className="max-w-[50%]"
                content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />

              <Button className="w-fit uppercase" label="read more" />
            </SectionTextContent>
          </GridLayout>
        </Container>
      </section>

      <section className="section section-detail">
        <Container>
          <GridLayout>
            <SectionTextContent className="col-span-6">
              <Typography
                content="Interior Design Program."
                variant={TYPOGRAPHY_TAG_VARIANT.HEAD_2}
              />

              <div className="flex gap-8 items-center">
                <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <Typography
                  className="!text-6xl"
                  content="/01"
                  variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
                />
              </div>

              <div className="flex gap-8 items-center">
                <Typography
                  className="!text-6xl"
                  content="02/"
                  variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
                />
                <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </div>
            </SectionTextContent>

            <div className="col-span-6">
              <ImageWrapper src="images/image_4.jpg" alt="image_4" />
            </div>
          </GridLayout>
        </Container>
      </section>

      <section className="section section-unique">
        <Container>
          <GridLayout>
            <div className="col-span-6 relative w-full h-[550px]">
              <div className="w-[70%] absolute top-0 left-0">
                <ImageWrapper src="images/image_5.jpg" alt="image_5" />
              </div>

              <div className="w-[70%] absolute bottom-0 right-0 border-2 border-solid border-white">
                <ImageWrapper src="images/image_6.jpg" alt="image_6" />
              </div>
            </div>

            <SectionTextContent className="col-span-6 ml-auto">
              <Typography
                content="Design Unique And Functional Spaces"
                variant={TYPOGRAPHY_TAG_VARIANT.HEAD_2}
              />

              <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

              <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </SectionTextContent>
          </GridLayout>
        </Container>
      </section>

      <section className="section section-mentorship">
        <Container className="flex flex-col gap-16">
          <Typography
            className="text-center"
            content="Our Mentorship Program"
            variant={TYPOGRAPHY_TAG_VARIANT.HEAD_2}
          />

          <GridLayout>
            <SectionTextContent className="col-span-4 ml-auto">
              <Typography
                className="!text-xl uppercase tracking-wider"
                content="Career Course"
                variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
              />

              <Typography
                content="Certified Interior Decorator"
                variant={TYPOGRAPHY_TAG_VARIANT.HEAD_3}
              />

              <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

              <Typography content="Rs. 25,000/- Introduction Price!" />

              <Button
                className="w-fit uppercase"
                label="Book Now"
                variant={BUTTON_VARIANT.BORDERED}
              />
            </SectionTextContent>

            <div className="mentorship-image col-span-4 w-full max-w-[96%] m-auto">
              <ImageWrapper src="images/image_7.jpg" alt="image_7" />
            </div>

            <SectionTextContent className="col-span-4 ml-auto">
              <ul className="mentorship-list  flex flex-col gap-12">
                <MentorshipItem
                  title="Certification"
                  content="Certified Interior Decorator "
                />
                <MentorshipItem
                  title="Course PaCe"
                  content="Study at flexible Pace"
                />
                <MentorshipItem title="Duration" content="4 Month" />
                <MentorshipItem title="Course form" content="100% Online" />
              </ul>
            </SectionTextContent>
          </GridLayout>
        </Container>
      </section>

      <section className="section section-feature">
        <Container>
          <GridLayout>
            <div className="col-span-4 w-full max-w-[92%]">
              <ImageWrapper src="images/image_8.jpg" alt="image_8" />
            </div>

            <SectionTextContent className="col-span-4">
              <Typography
                content="Furniture Should Be Comfortable."
                variant={TYPOGRAPHY_TAG_VARIANT.HEAD_2}
              />

              <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
            </SectionTextContent>

            <div className="col-span-4 w-full max-w-[92%] ml-auto flex flex-col gap-8">
              <ImageWrapper src="images/image_9.jpg" alt="image_9" />

              <Typography content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
            </div>
          </GridLayout>
        </Container>
      </section>

      <section className="section section-contact">
        <Container>
          <GridLayout className="items-center">
            <SectionTextContent className="col-span-6">
              <Typography content="Let’s Work together And We’ll help you By Our Best Interior Design" />

              <Button
                className="w-fit uppercase"
                label="Let’s Chat"
                variant={BUTTON_VARIANT.BORDERED}
              />
            </SectionTextContent>

            <div className="col-span-6 w-full max-w-[92%] ml-auto">
              <ImageWrapper src="images/image_10.jpg" alt="image_10" />
            </div>
          </GridLayout>
        </Container>
      </section>
    </div>
  );
}
