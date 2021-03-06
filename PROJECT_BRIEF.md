# Project Brief, The Collab Lab

## Advanced Project

### Overview

The goal of the project is to build a mobile web app that shows you [nearby Wikipedia entries](https://thenextweb.com/media/2013/05/29/wikipedia-surfaces-articles-based-on-your-location-and-wants-you-to-add-photos-with-your-mobile-phone/).

This project is based on [whats-near.me](https://whats-near.me), a mobile web app Andrew built for my own use. You’re welcome to look at the [GitHub repo for that site](https://github.com/segdeha/whats-near.me) if you get stuck and want a hint!

![Screenshots from whats-near.me](https://raw.githubusercontent.com/the-collab-lab/tcl-pilot-2020-05/master/screenshots.png)

### Locations for things

- Site: [Production Site](https://tcl-30-whats-near-me-d2e34.web.app/)
- Repo: [Repository](https://github.com/the-collab-lab/tcl-30-whats-near-me)
- Clone URL: `https://github.com/the-collab-lab/tcl-30-whats-near-me.git`
- Issue list: [Jira Board](https://tinyurl.com/tcl30jira)
- Google Cloud Console: https://console.developers.google.com/apis/dashboard?project=tcl-30-whats-near-me

### Project cadence & duration

The project is expected to take 40 hours per participant, spread over 8 weeks.

Each week, the team of 4 developers will split into 2 pairs of 2 developers each. Each pair will take on a story or task from the issues list to work on together that week.

Pairings will go as follows:

#### Week 1, July 10 - 16

1. Megan & Jessica
2. Alejandro & Katia

#### Week 2, July 17 - 23

1. Katia & Megan
2. Jessica & Alejandro

#### Week 3, July 24 - 30

1. Alejandro & Megan
2. Jessica & Katia

#### Week 4, July 31 - August 6

1. Megan & Jessica
2. Alejandro & Katia

#### Week 5, August 7 - 13

1. Katia & Megan
2. Jessica & Alejandro

#### Week 6, August 14 - 20

1. Alejandro & Megan
2. Jessica & Katia

#### Week 7, August 21 - 27

1. Megan & Jessica
2. Alejandro & Katia

#### Week 8, August 28 - September 3

1. Katia & Megan
2. Jessica & Alejandro

### Pair Programming

A portion of your dedicated hours each week will be spent [pair programming](https://www.freecodecamp.org/news/how-remote-pair-programming-works-and-why-it-can-change-your-life-cd7b767dc60f/) with your partner—this is where the most magical collaboration happens!

Pair programming offers some really exciting opportunities to teach/learn from your partner, get a different perspective and/or insight on the issues you’re facing, and drive forward progress on your goals.

There is no one “right” way to pair program, but in general, you will meet with your partner on a video call to work through the story or task you’ve chosen for that week. You’re encouraged to test out some different approaches to pair programming to see what works best for your and your partner’s collaboration styles.

### Weekly Sync

Each week, we’ll get on a 1-hour Zoom call. The call will always start with a _quick demo of the previous week’s work_ from each pair. This is a common practice on most software teams and also lets you practice talking about your work, which can come in handy in a job interview setting!

The way we use the rest of the time will vary based on whether it’s an even- or odd-numbered week, as follows:

#### Odd-numbered weeks

1. Demos/discussion (15 minutes)
2. Learning module (30 minutes)
3. Team reviews in-progress and upcoming issues (15 minutes)

#### Even-numbered weeks

1. Demos/discussion (15 minutes)
2. Retrospective (30 minutes)
3. Team reviews in-progress and upcoming issues (15 minutes)

Our retro format will change each week. Watch the team channel for more details!

### Weekly Cadence

A week sounds like a long time in some ways, but part of working on a team is accounting for coordination costs. Let’s walk back our goal of demoing from the production URL on Sundays to see when different things need to happen.

- Saturday — Demo on production!
- Friday — Respond to mentor feedback on PRs
- Thursday — Respond to/give peer feedback on PRs and ping mentors for feedback
- Wednesday — Complete story and ask for peer feedback
- Sunday, Monday, Tuesday — Work out approach, research if needed, pair program

Having watched many cohorts before yours, our advice is to front-load the work as much as possible in the first couple of days of each week. Some of the stories are trickier than they appear on the surface!

Additionally, the stories in this project are not all scoped to take exactly one week. It is expected that if you wrap up early and have time to get started on the next story on the board that you will pick it up and keep the project moving. Likewise, it is highly likely that some stories will take more than a single week to complete!

### How to know what to do

The project is organized in GitHub as a set of [user stories](https://www.mountaingoatsoftware.com/agile/user-stories), each with a description of the desired functionality as well as [acceptance criteria](https://www.leadingagile.com/2014/09/acceptance-criteria/) (AC) that describe how you know whether the task or story is complete. You can find the stories on [the project board](https://tinyurl.com/tcl30jira) on Jira.

A task or story is “done” when the following are all true:

- The AC have been met
- The code to complete the task or implement the feature has been reviewed and approved by the other pair of developers
- The code has been reviewed and approved by one of the mentors
- The [Product Owner](https://www.agilealliance.org/glossary/product-owner/) (i.e. one of the mentors) has accepted the work as satisfactorily meeting the requirements

The “backlog” (the collection of stories) represents the work needed to complete the project. At the point when all of the stories are done, we should have a working app!

### Coordination & communication

It’s super helpful both to yourself and the mentors for you to document your work. This can prevent you from losing track of details or decisions you make with your pair buddy. It also allows mentors to catch up on your progress when you ask for help.

You are strongly encouraged to create a [draft PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) as one of their first steps in getting started with the work. An advantage of this approach is you can have a conversation about the work right alongside the code. This, coupled with discussions about approach in the issue itself, is nice way of documenting your progress as you go.

You can also ask for clarification about stories directly on the issues themselves in Jira.

Additionally, we encouragae you to “work in the open” as much as possible. This can take the form of discussing ideas, progress, and blockers in a pairing thread in Slack. Our channel has a Slack workflow enabled to facilitate this (screenshot below).

![Click the workflow icon then click “Create a story thread”](https://cdn.zappy.app/89a1cb97ee68ec395d3f9a71a2e524c7.jpg)

### Development process

Work will be done on feature branches in git. Branches should be named in the following way:

    <initials of person 1>-<initials of person 2>-<short description>

For example:

    st-an-render-map

The hypothetical example above has Stacie Taylor and Alejandro Ñáñez working together to get a map to render. Each of them will be able to work on the feature branch independently, but only one of them will submit the pull request (PR) when the work is ready (described in more detail below).

When you’re ready to start work on a feature, one person in your pair should create a local branch following the naming convention above, then push the branch to GitHub so your pair buddy can pull it down to their local environment. The following steps should work to do just this:

    git checkout -b an-example-feature-branch
    git push -u origin an-example-feature-branch

When you and your pair partner have working code that you believe is ready to be merged to `main` and deployed, you will follow the following steps:

1. Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) describing the work done, the before and after states, and how to validate that the changes work as intended
2. Notify the other pair team by `@mentioning` them in Slack to let them know you have a new PR for them to review
3. Incorporate feedback from the other pair team into your work until both you and they are satisfied the code is ready to be merged
4. Request that Andrew or Lauren review the PR for final approval
5. Once approved, merge the PR into `main` (your code will be built and deployed to production automatically thanks to [Firebase Hosting](https://console.firebase.google.com/u/0/project/tcl-30-whats-near-me-d2e34/overview))
6. Check your work on the [production site](https://tcl-30-whats-near-me-d2e34.web.app/)
7. Celebrate! 🥳

### What else?

There are both similarities and differences between how we will run this project and how your previous Collab Lab projects were run. We will talk those through in our first weekly sync. Between now and then, please ask any questions you have in [our team channel](https://the-collab-lab.slack.com/archives/C023UVBJXQ9)!

I’m around 💯% sure I’m forgetting or glossing over something important, so please be noisy on Slack as things come up. The mentors and I will do our best to get you un-stuck. Also, lean on each other for help as well! Finally, work in the open so everyone can benefit from your questions.

![GIF of George-Michael Bluth saying to his dad, “It’s happening, isn’t it”.](https://segdeha.com/assets/imgs/its-happening-isnt-it.gif)
