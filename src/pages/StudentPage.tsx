import { useState } from 'react'
import MindMap from '../components/MindMap'
import DocumentationLayout from '../components/DocumentationLayout'

const StudentPage = () => {
  const [visualizationType, setVisualizationType] = useState<'mindmap' | 'documentation'>('documentation')
  const studentNodes = [
    {
      id: 'assessments',
      title: 'Assessments',
      description: 'Guidelines for using AI in academic assessments.',
      level: 0,
      x: 0,
      y: 0,
      children: [
        {
          id: 'technical-academic-writing',
          title: 'Technical Academic Writing',
          description: 'Guidelines for AI use in technical academic writing assignments.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'research',
              title: 'Research',
              description: 'Guidelines for using AI in research processes.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'pre-writing-prompts',
                  title: 'Pre-writing prompts',
                  description: 'Can be used for brainstorming and idea generation, but prompting for direct or gradable answers is not allowed. Students must fact-check, acknowledge any AI use, and submit their own work. Use is restricted or prohibited in assessments unless explicitly permitted.',
                  scenario: {
                    allowed: 'Brian prompted ChatGPT: "Give me 3 aspects that I can explore the topic of AI and job security". He analysed the suggestion of ChatGPT, found his own sources, and wrote the essay himself.',
                    notAllowed: 'Charlie copied and pasted his research topic and asked the AI model to find sources (without fact-check/cross-check), generate a full essay, and submit.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'searching-sources',
                  title: 'Searching for sources',
                  description: 'Using GenAI to find sources is generally permitted as a study aid, but students must verify all sources for accuracy and credibility. Hallucinated or fake references from AI will not be accepted, and undisclosed or unauthorised use may lead to academic misconduct. Always check unit or assessment rules and acknowledge any AI use.',
                  scenario: {
                    allowed: 'Brian used AI to help him find multiple sources at a time for his thesis. He used the suggested prompting template provided by the university and found credible papers. He then analysed and cross-checked each source to avoid fake references and made-up information. The source finding was disclosed.',
                    notAllowed: 'Charlie copied a spotless-looking reference list from AI. Two articles don\'t exist; one did not relate to his research. He used the sources without checking them.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'summarising-sources',
                  title: 'Summarising the sources',
                  description: 'Using GenAI to summarise sources is generally allowed as a study and planning aid, but students must critically review and fact-check the output. Any reliance on AI-generated summaries in assessments must be adequately acknowledged and follow course-specific rules. Uploading copyrighted material without permission is not allowed.',
                  scenario: {
                    allowed: 'Brian read an open-source paper and asked ChatGPT to summarise it. The summarised information was later checked with the original paper. With the findings, Alex continued to do his own work. Disclosed that AI was used to summarise findings and reduce the time.',
                    notAllowed: 'Charlie not only uploaded a copyrighted research paper that he doesn\'t own, but also asked the GenerativeAI to summarise the findings for him. He did not check the AI output and put the findings into his writing assessment. Breaching the copyright and academic integrity.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'evaluate-analyse-sources',
                  title: 'Evaluate and analyse sources',
                  description: 'Using GenAI to support evaluation or analysis of sources is generally allowed, but students remain fully responsible for the critical thinking and final analysis. All AI output must be fact-checked and verified. GenAI can assist, but cannot replace independent academic study, and disclosure may be required depending on the task.',
                  scenario: {
                    allowed: 'Brian asked GenerativeAI what questions he should ask to spot weak methods in a research paper. He used those generated questions to evaluate each paper himself and backs every point with quotes/page numbers from the documents. He noted in her writing that AI was used for prompts.',
                    notAllowed: 'Charlie posted 2 papers into GenerativeAI and asked which one was better. He submitted the one that the AI model picked as his own opinion. There was no reading, analysis or disclosure.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'outlining',
              title: 'Outlining',
              description: 'Guidelines for using AI to create and refine outlines.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'generating-general-outline',
                  title: 'Generating general outline',
                  description: 'Creating outlines is typically permitted as a brainstorming tool, but not for generating final assessment content. Students must acknowledge AI use and follow course-specific rules, as unauthorised use may lead to academic misconduct.',
                  scenario: {
                    allowed: 'Brian asked: "List me 5 headings that can bring analytical and impactful arguments to my topic of "AI uses in ICT". He then evaluated the generated headings and thought of potential sources that could support his essay. Brian developed and wrote his own work by adding information that he collected from credible papers. He noted in the essay that AI was used for brainstorming purposes.',
                    notAllowed: 'Charlie asked the AI model: "Generate an outline with full bullet sentences that I can copy into my report." He used the AI text verbatim in the submission. This is considered generating gradable content, not just brainstorming.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'polishing-outline',
                  title: 'Polishing outline',
                  description: 'Providing feedback or polishing outlines is generally allowed; transparency and human oversight are required. The final work must be the student\'s own, and the use must comply with the assessment requirements.',
                  scenario: {
                    allowed: 'Brian uploaded his own outline and asked GenerativeAI to check the logic and suggest improvements. He evaluated and added the argument that AI mentioned, then wrote the paper herself. He noted: "AI used for outline feedback at [details in the essay]".',
                    notAllowed: 'Charlie uploaded his outline and asked ChatGPT to rewrite and enhance the outline. That AI-generated outline was later submitted as his work. He did not mention the use of AI.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'writing-polishing',
              title: 'Writing and Polishing',
              description: 'Guidelines for AI assistance in the actual writing and polishing process.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'pass-wording',
                  title: 'Pass for wording',
                  description: 'Basic spelling and grammar tools (e.g., Grammarly) are generally allowed.',
                  scenario: {
                    allowed: 'Brian ran his draft through Grammarly/Word spell-check to fix typos and commas. He kept all ideas and sentences his.',
                    notAllowed: 'Charlie pasted his entire essay into a tool, accepted full-sentence rewrites and style changes, then submitted without disclosure. This is out of scope, violating academic integrity.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'expand-detailed-outline',
                  title: 'Expand a detailed outline',
                  description: 'GenAI is restricted to expanding or fleshing out outlines. Structuring an outline is permitted, but not for producing final written content. If permitted, students must acknowledge AI use and retain authorship responsibility.',
                  scenario: {
                    allowed: 'Brian asked the AI model to propose section order and headings for his essay. He reordered sections, evaluated the suggestion and wrote the report in his own words. Discloses outline assistance.',
                    notAllowed: '"Turn my outline into a paragraph" is not permitted'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'wholesale-generated-writing',
                  title: 'Wholesale-generated writing',
                  description: 'Restricted',
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'creating-bibliography',
                  title: 'Creating bibliography',
                  description: 'Generating bibliographies is allowed, but students must verify accuracy, cite the tool, and follow referencing conventions. Students are responsible for the errors.',
                  scenario: {
                    allowed: 'Brian used Zotero/AI to generate a bibliography, then opened each source, fixed titles/DOIs, switched to the correct style (APA 7), and added a disclosure: "Bibliography initially generated with AI. Brian verified the accuracy.',
                    notAllowed: 'Charlie exported an AI-made reference list and didn\'t check anything. This could lead to inaccurate references.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'references',
                  title: 'References',
                  description: 'References generated by GenAI are permitted but must be verified for authenticity and format. Fabricated or unchecked references can lead to academic integrity violations.',
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'translation-work',
                  title: 'Translation of work',
                  description: 'Translating work using GenAI is not directly addressed in most policies, but it is typically permitted only if disclosed and not used to produce final assessed work. Refer to the course coordinators and the course\'s requirements for accurate details.',
                  scenario: {
                    allowed: 'Brian noted his findings in Vietnamese, used AI to translate them into English notes, and then wrote his essay himself. He disclosed that AI was used for the translation of notes only.',
                    notAllowed: 'Charlie wrote his report in Spanish, asked AI to translate into polished English paragraphs, and submitted that translation as the final assessed text without disclosure.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            }
          ]
        },
        {
          id: 'programming',
          title: 'Programming',
          description: 'Guidelines for using AI in programming assignments.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'understanding-design',
              title: 'Understanding/Design',
              description: 'Guidelines for using AI to understand programming concepts and design solutions.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'code-explanation',
                  title: 'Code explanation',
                  description: 'Code explanation is generally allowed for learning purposes. Students must understand the code on their own; GenAI can not solely act as the primary key to understanding.',
                  scenario: {
                    allowed: 'Brian asked GenAI to explain C pointer. He then noted down the explanation and tried to implement it by practising coding. He was able to understand the content by using AI to explain and learn his own way.',
                    notAllowed: 'Charlie asked GenAI to explain the C pointer, but instead of trying to understand the content, he just pasted in his notes and doesn\'t mind looking back at it.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'summarising-requirements',
                  title: 'Summarising requirements',
                  description: 'GenAI may be used to summarise and clarify programming requirements for personal learning or planning. Students should verify accuracy and follow task-specific rules.',
                  scenario: {
                    allowed: 'Brian asked AI to summarise the assignment brief by: "Summarise requirements only into a checklist." He verifies against the original documents and the rubric before planning and continues working further.',
                    notAllowed: 'Charlie used AI to summarise the requirements of the assessment. But he did not verify it and missed "adding comments and README file". He got 5 points deducted for not providing the comments and the requested README file.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'planning-programming-flow',
                  title: 'Planning and programming flow',
                  description: 'AI can be used for brainstorming and structuring the flow and logic of a program. However, the final submission must be the student\'s own, as students should not rely on AI to build the entire program flow.',
                  scenario: {
                    allowed: 'Brian asked AI to brainstorm flow for a REST API: routes → validation → DB → tests." He designed his own program and built the data model based on the generative flows.',
                    notAllowed: 'Charlie prompted the AI model to build the whole flow. He then pasted the AI-generated architecture (classes, function names, comments) and implemented it almost verbatim. That\'s outsourcing the core design.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'getting-feedback-code',
                  title: 'Getting feedback on code',
                  description: 'GenAI can be used to improve code. However, GenAI output should only serve as reference tools. Copying AI output is not permitted.',
                  scenario: {
                    allowed: 'Brian asked GenAI to comment and provide general feedback. He read and fixed accordingly by himself with his own test cases.',
                    notAllowed: 'Charlie copied the fixed code done by AI and submitted it.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'writing-code',
              title: 'Writing code',
              description: 'Guidelines for AI assistance in the actual coding process.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'syntax-assistance',
                  title: 'Syntax assistance',
                  description: 'GenAI can help with syntax or minor code corrections, but students should not let AI rewrite or complete the code for them. Disclosure: Use of AI is required, and course-specific rules must be followed.',
                  scenario: {
                    allowed: 'Brian got "TypeError: list indices must be integers." He asked AI: "What does this mean?". Reviewed the code with the hints from AI, identified the error and fixed it by himself. He disclosed that: "AI used to clarify a Python TypeError, I fixed the code."',
                    notAllowed: 'Charlie said: "Rewrite my file to make it work" is not allowed'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'code-checking',
                  title: 'Code checking',
                  description: 'AI tools can be used for linting, debugging, or error checking, provided the student writes and fixes the code themselves. Disclosure of use is required when relevant, and no sensitive or restricted code should be entered into public AI platforms.',
                  scenario: {
                    allowed: 'Brian asked GenAI to comment and provide general feedback. He read and fixed accordingly by himself with his own test cases.',
                    notAllowed: 'Charlie copied the fixed code done by AI and submitted it.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'code-generation',
                  title: 'Code generation',
                  description: 'Generally prohibited and considered an academic breach unless explicitly permitted. Small snippets may be allowed with proper disclosure and human oversight, but students are expected to demonstrate their own coding skills.',
                  scenario: {
                    allowed: 'Brian asked GenAI to comment and provide general feedback. He read and fixed accordingly by himself with his own test cases.',
                    notAllowed: 'Charlie copied the fixed code done by AI and submitted it.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'testing',
              title: 'Testing',
              description: 'Guidelines for using AI in testing and debugging processes.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'debugging',
                  title: 'Debugging',
                  description: 'Overall, it is not permitted as students must showcase their analytical skills and understanding. Using GenAI for debugging purposes is allowed in terms of learning, but not in submission and gradeable assignments. Can be used if the course\'s rules say otherwise.',
                  scenario: {
                    allowed: 'Brian asked AI: "What does a segfault usually mean in C?" He learned common causes, then debugs his own code offline.',
                    notAllowed: 'Charlie uploaded his graded assignment and asked AI to fix all bugs. He submitted the AI-patched file'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'creating-test-cases',
                  title: 'Creating test cases',
                  description: 'Allowed. Discuss with the course coordinator for accurate information.',
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            }
          ]
        },
        {
          id: 'creative-writing',
          title: 'Creative writing',
          description: 'Guidelines for using AI in creative writing assignments.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'creative-writing-general',
              title: 'Creative Writing in general',
              description: 'GenAI can\'t be used to generate creative text or design outputs for assessments unless explicitly permitted. Any AI involvement must be disclosed, and the final work must be original.',
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'preliminary-work',
              title: 'Preliminary Work',
              description: 'Guidelines for using AI in the preliminary stages of creative writing.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'subject-matter-research',
                  title: 'Subject Matter Research',
                  description: 'It is typically permitted because it involves brainstorming and planning. For assessments, students must check task rules, verify information, and acknowledge use if relevant.',
                  scenario: {
                    allowed: 'Brian played around with AI to learn how to write a short story and to research relevant elements to include.',
                    notAllowed: 'Charlie copied fake and unverified citations from the AI and used them in his writing.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'concept-creation',
                  title: 'Concept Creation',
                  description: 'GenAI may be used for idea generation but students are responsible for fact-checking and ensuring the final creative work is their own. Disclosure may be required if ideas shape assessed outputs.',
                  scenario: {
                    allowed: '"Pitch me 10 premises about solitude at sea." Brian picked one and wrote the entire piece himself.',
                    notAllowed: 'Charlie prompted: "Write a full outline with paragraph bullets I can paste." He then used the wording verbatim in the graded piece.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'finding-inspiration',
                  title: 'Finding Inspiration',
                  description: 'GenAI may be used for finding inspiration, but students are responsible for fact-checking and ensuring the final creative work is their own. Disclosure may be required if ideas shape assessed outputs.',
                  scenario: {
                    allowed: 'Brian chatted with the AI and found the inspiration by asking questions that led to his ideas. He then completed the work by himself.',
                    notAllowed: 'Charlie used AI to generate an AI-generated image, then submitted for grading'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'drafting',
              title: 'Drafting',
              description: 'Guidelines for AI assistance in the drafting process.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'prompting-frameworks',
                  title: 'Prompting Frameworks',
                  description: 'AI can be used to generate or critique an early draft framework. Copying AI-generated drafts is not allowed, and assessments must reflect student authorship.',
                  scenario: {
                    allowed: 'Brian asked AI to suggest a framework for her op-ed (claim → counter → evidence → implications). He rearranged it, added his own points, then wrote the draft himself',
                    notAllowed: 'Charlie used AI to generate a framework for his poem writing. He copied almost everything and put it in his work.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'critique',
                  title: 'Critique',
                  description: 'AI can be used to generate or critique an early draft framework. Copying AI-generated drafts is not allowed, and assessments must reflect student authorship.',
                  scenario: {
                    allowed: 'Brian used AI and asked for improvement and suggestions. He specifically asked for "missing arguments" and did further research and added to his existing framework',
                    notAllowed: 'Charlie used AI to rewrite his draft to sound academic. He submitted the AI-rephrased text.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'writing',
              title: 'Writing',
              description: 'Guidelines for AI use in the actual writing process.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'using-ai-text',
                  title: 'Using AI Text',
                  description: 'Submitting AI-generated creative text is prohibited unless specifically authorised.',
                  scenario: {
                    allowed: 'Brian asked AI for three themes, then wrote every line himself. He disclosed the idea prompting.',
                    notAllowed: 'For a graded poem, Charlie gets AI to write the poem and submits it unchanged'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'refinement',
                  title: 'Refinement',
                  description: 'AI use for refinement or brainstorming must be transparent, and students must not rephrase or present AI outputs as their own.',
                  scenario: {
                    allowed: 'Brian run grammar/spell check and a clarity pass. He rewrote the flagged lines himself and noted AI was used for refinement only',
                    notAllowed: 'Charlie asked: "rewrite paragraph" on several scenes and pastes the AI wording into his script. (Presenting AI text as his own.)'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            }
          ]
        },
        {
          id: 'creative-design',
          title: 'Creative Design',
          description: 'Guidelines for using AI in creative design projects.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'conceptualising',
              title: 'Conceptualising',
              description: 'Guidelines for using AI in the conceptualization phase of design work.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'brainstorming',
                  title: 'Brainstorming',
                  description: 'Allowed as a support tool. Students must verify the finding',
                  scenario: {
                    allowed: 'For a "campus wayfinding" app, Brian asked AI for 10 feature ideas and 3 user pain points. He then checked feasibility (maps API limits, privacy) and kept only what he could justify in his concept note.',
                    notAllowed: 'Charlie asked AI for a full feature list + value prop and copied it as his concept without validating sources, constraints, or user needs.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'concept-refinement',
                  title: 'Concept Refinement',
                  description: 'Allowed as a support tool.',
                  scenario: {
                    allowed: 'Brian shared his own concept draft and asked AI, "What risks or edge users did I miss?" He added risk mitigations and updates personas himself.',
                    notAllowed: 'Charlie asked AI "Rewrite my concept into a pitch." He used AI\'s sentences as his proposal wording for assessment.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'rendering',
              title: 'Rendering',
              description: 'Guidelines for AI use in the rendering and final production phase.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'generated-mockup-image',
                  title: 'Generated Mockup image',
                  description: 'Not allowed unless explicitly stated otherwise',
                  scenario: {
                    allowed: 'Brian generated an AI sketchy wireframe to discuss layout in workshops only, labels it "AI-generated for ideation," and creates the graded mockups himself in Figma.',
                    notAllowed: 'Charlie used AI generated image to submit as his design'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'final-products',
                  title: 'Final Products',
                  description: 'Not allowed',
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            }
          ]
        },
        {
          id: 'practicals-lab-work',
          title: 'Practicals and Lab work',
          description: 'Guidelines for using AI in laboratory work and scientific reporting.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'writing-summarised-report',
              title: 'Writing a summarised report',
              description: 'GenAI may be used to summarise reports solely for study purposes, for example, to better understand key findings. However, using AI-generated summaries for submission in assessments is prohibited unless the task instructions explicitly allow it. When permitted, all AI assistance must be acknowledged and reviewed for factual accuracy.',
              scenario: {
                allowed: 'Brian read a chemistry lab report then used AI to create a private study summary of key findings. He checked facts against the calculations and theory, added his own notes with his explanation and examples, and did not submit the AI summary for assessment.',
                notAllowed: 'Charlie uploaded his lab report to the AI model, asked for an in-depth summary and submitted as his work'
              },
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'interpretation-result',
              title: 'Interpretation of result',
              description: 'GenAI tools may be used to aid in understanding or interpreting results of experiments, provided this is done for personal learning and not as a part of a graded submission. As with all AI-produced output, students should be cautious of inaccurate or oversimplified interpretations. It is always recommended to verify conclusions through manual analysis and consultation with teaching staff, rather than relying on AI.',
              scenario: {
                allowed: 'After a lab, Brian asked AI, "What does a right-skewed residual plot usually imply?" He useed the AI output, check facts and read other materials to learn, then performed his own manual analysis, discussed with his tutor, and wrote the graded discussion himself',
                notAllowed: 'Charlie inputed his experiment results to AI and copied the AI output to the graded discussion section. No independent checks, no tutor consultation, no disclosure.'
              },
              level: 2,
              x: 0,
              y: 0,
            }
          ]
        },
        {
          id: 'mathematical-assessments',
          title: 'Mathematical assessments',
          description: 'Guidelines for using AI in mathematical assessments.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'prompted-answers',
              title: 'Prompted answers',
              description: 'Using AI to directly solve or generate answers for mathematical or numerical assessment tasks is strictly prohibited, as it constitutes academic misconduct in all of the ACDICT institutions. In certain assessments, usage may be allowed to check the understanding of underlying concepts, provided no assessment-specific material is entered.',
              scenario: {
                allowed: 'Brian wanted to learn about the product rule and asked AI, "What does the product rule mean, conceptually?" He studied the explanation, then solved new practice problems by hand.',
                notAllowed: 'Charlie uploaded his mathematical quiz and copied the step-by-step guide of the AI then turned in as his submission.'
              },
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'breakdown-questions',
              title: 'Breakdown of questions',
              description: 'Using AI to explain or break down complex mathematical problems is allowed for learning purposes (provided that the problem is not part of an assessment). Students are recommended to use this feature to improve comprehension of mathematical principles rather than to obtain full worked solutions. As with all uses of AI, any explanations provided should be verified for accuracy, since GenAI models may misapply formulas or reasoning.',
              scenario: {
                allowed: 'Brian took a material about integral and asked AI to break down the approach (u-sub vs parts). He then worked the full solution himself on paper and checked the provided solution by the textbook.',
                notAllowed: 'Charlie pasted his question and asked GenAI chatbot to solve it for him'
              },
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'interpretation-numbers-scenario',
              title: 'Interpretation of numbers to scenario',
              description: 'AI can be used to practise applying mathematical results to real-world scenarios as a study aid. However, when it comes to assessed work, the interpretation and written explanation must be the student\'s own original effort, and AI-generated examples should not be copied or submitted.',
              scenario: {
                allowed: 'After practising stats, Brian asked AI: "Give me practice scenarios where a 95% CI excludes 0." He read them, then wrote his own interpretation for a different dataset in his assignment.',
                notAllowed: 'Charlie got the AI to interpret his current lab\'s regression output and pastes the AI wording into the graded discussion.'
              },
              level: 2,
              x: 0,
              y: 0,
            }
          ]
        },
        {
          id: 'tests-quizzes-examinations',
          title: 'Tests, quizzes and examinations',
          description: 'In all ACDICT universities, the use of GenAI during tests, quizzes or examinations is strictly prohibited unless explicitly authorised by the instructor or university. Tests are designed to assess individual understanding and integrity; therefore, using GenAI in any form during a closed or supervised assessment would be considered a breach of academic integrity.\n\nHowever, using genAI tools to prepare for tests beforehand - such as for concept review, summarisation, or practice problem generation, is permitted in most cases, unless explicitly restricted by the instructor or university.',
          level: 1,
          x: 0,
          y: 0,
        }
      ]
    },
    {
      id: 'learning',
      title: 'Learning',
      description: 'Guidelines for using AI as a learning tool.',
      level: 0,
      x: 0,
      y: 0,
      children: [
        {
          id: 'prompting-answers-learning',
          title: 'Prompting for answers',
          description: 'Prompting GenAI tools to obtain direct answers is permitted only for personal learning and understanding. However, it is strictly prohibited to include or reproduce any university-owned or copyrighted materials in such prompts. Students remain responsible for verifying the accuracy of AI-generated responses and ensuring that this use does not constitute academic misconduct.',
          scenario: {
            allowed: 'Brian: Asks, "Explain Bayes\' theorem in simple terms." He doesn\'t paste lecture slides, checks the answer in a textbook, and keeps it for personal study only.',
            notAllowed: 'Charlie uploads a copyrighted tutorial PDF and asks for the exact answers to its end-of-chapter questions. He copies them into his worksheet.'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'creation-study-tools',
          title: 'Creation of study tools',
          description: 'The use of GenAI to create personal study aids (flashcards, quizzes, or summaries etc.) is encouraged, as it can support independent learning. Nevertheless, university materials must not be uploaded or used as prompts when generating these tools. Users should also confirm that any generated content is factually accurate.',
          scenario: {
            allowed: 'Brian prompts, "Make 20 flashcards on TCP vs UDP based on public sources." He spot-checks each card, edits errors, and studies them privately.',
            notAllowed: 'Charlie uses AI to solve the quiz and shares it on the internet for his personal gain.'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'breaking-down-concept',
          title: 'Explain like I\'m five',
          description: 'Using GenAI to explain or simplify complex topics is allowed and can be beneficial for comprehension. However, students must apply critical thinking and fact-check all generated explanations.',
          scenario: {
            allowed: 'Brian used AI to help him simplify a hard concept of concurrency in programming. He then used the AI output, watched the lecture and compared. He learned and practiced after that.',
            notAllowed: 'Charlie does the same thing but he assumes that the AI output was correct. He does not learn anything from it but copied the output into his notes.'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'summarizing-learning-material',
          title: 'Summarizing learning material',
          description: 'Summarising course content with the help of GenAI may be conditionally permitted, provided that no proprietary or restricted university materials are entered into the system. Students should review and verify AI-produced summaries for accuracy before relying on them for study or assessment purposes.',
          scenario: {
            allowed: 'Brian pastes his own typed notes (not slides) and asks for a 200-word recap. He verifies against the textbook and keeps it for study.',
            notAllowed: 'Charlie uploads paywalled lecture slides to summarise and then submits that summary as an assignment section.'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'asking-clarify-question',
          title: 'Asking clarifying questions',
          description: 'Using GenAI to ask clarifying or follow-up questions about general concepts is allowed. However, when the clarification relates directly to course-specific requirements or assessment criteria, students are advised to seek guidance from the teaching staff instead, to ensure accuracy and compliance with course expectations.',
          scenario: {
            allowed: 'Brian chatted with the AI chatbot to further understand the question. He then fact-check with peers and use course materials to get a better understanding of the assignment.',
            notAllowed: 'Charlie copied the assignment questions, skimmed through the output and did the assignment carelessly'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'translating-course-content',
          title: 'Translating course content',
          description: 'Translation of publicly available or personal notes through GenAI is permitted. However, users must avoid inputting copyrighted or confidential university materials, as doing so could breach intellectual property and privacy regulations.',
          scenario: {
            allowed: 'Brian used AI to translated a material of a hardconcept into his mothertounge to get a better understanding. He then used that knowledge and wrote the report on his words and analysis. AI was used for brainstorming and research purposes.',
            notAllowed: 'Charlie wrote a paper in French the used AI to convert it into English and submitted it.'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'research-learning',
          title: 'Research',
          description: 'Using GenAI to conduct or generate research outputs is generally not permitted, as it may undermine the development of critical research skills and the integrity of scholarly work. Furthermore, GenAI systems may fabricate or "hallucinate" references and data. If used at all, AI tools should be limited to idea exploration or preliminary brainstorming, and all outputs must be independently verified using legitimate academic sources.\n\nAll ACDICT universities require you to comply with the Australian Code for the Responsible Conduct of Research (2018), which mandates that all research be conducted with honesty, accuracy, efficiency, and fairness. This means that any use of GenAI in the research process must be transparent, appropriately acknowledged, and must not compromise the authenticity or reproducibility of the research. Researchers are responsible for maintaining full control and accountability over the integrity of their data, methods, and findings, regardless of whether AI tools are involved.',
          level: 1,
          x: 0,
          y: 0,
        }
      ]
    }
  ]

  return (
    <div className="relative">
      {/* Visualization Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
          <div className="flex">
            <button
              onClick={() => setVisualizationType('mindmap')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors duration-200 ${
                visualizationType === 'mindmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Mind Map
            </button>
            <button
              onClick={() => setVisualizationType('documentation')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors duration-200 ${
                visualizationType === 'documentation'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {visualizationType === 'mindmap' ? (
        <MindMap nodes={studentNodes} />
      ) : (
        <DocumentationLayout nodes={studentNodes} />
      )}
    </div>
  )
}

export default StudentPage
