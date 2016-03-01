---
title: FAQ
tags: [getting_started]
keywords: question, faq
last_updated: March 10, 2016
---

## General Questions

### How do I implement Communote in my enterprise successfully?

After login into your Communote account, familiarizing yourself with the features and getting to know the use cases, the question arises of how to implement Communote in the enterprise.
Before beginning with the implementation of Communote, you should clearly define the goals you want to achieve with the use of Communote. Do you want to make decision processes more traceable, create a more transparent project communication or improve innovation? Gain partners from the management for your goals to get further support. Act according to the principle: "Start small, think big!".
The following 7 steps have to be taken for a successful implementation of Communote in your enterprise:

1. Step: Invite Participants
  It is crucial to create awareness for Communote in your enterprise. Therefore you should talk to colleagues about Communote, inspire them and convince them of the new way of communication. The concrete use of Communote should thereby be mentioned. Give some examples, in which way Communote has contributed to an improved situation. Pay attention that all potential participants have access and help your colleagues in using Communote, by giving a short introduction.
2. Step: Define Topics and Fields of Use
  The clear definition of topics and fields of use for Communote in the enterprise improves the effectiveness of communication, as every employee knows which medium he should use for communicating. Consider whether there are current issues that are suitable for the use of Communote. Projects including teams from various regions and those with many stakeholders are usually well suited for Communote. Think about current approaches to improve communication.
3. Step: Gain first experience
  At the beginning it is recommended to choose a limited number of participants for selected projects to gain first experience in dealing with Communote. Thereby give the participants some time to familiarise with the new way of communicating. Ask for feedback from the participants and evaluate potentials and use cases in your enterprise.
4. Step: Define the Rules of the Game
  Based on your first experiences you should define some rules for the usage of Communote. At first, it should be determined which kind of information belongs to the microblog. Subsequently, each topic should receive certain tags (#hashtags) to improve the traceability of the notes. Blogs can be open for everybody or limited to a certain group of participants. Appoint the topics that should be accessible for everybody and those who should not. Agree upon the way of communication with all participants (like no or only limited communication via email) in order to give Communote the chance to realize its full potential.
5. Step: Integration into existing Structures
  Subsequently you can start to integrate Communote into existing structures. Adjust logo and design to your corporate design and integrate Communote in existing communication and information portals like Wikis, SharePoint, Intranet, Instant Messaging or RSS. Also try to push the use of the Mobile Client and consider possible security regulations by installing Communote behind the firewall. Integrate Communote furthermore in your company's Enterprise 2.0 strategy.
6. Step: Take off
  Draw more attention to Communote to unveil its full potential. Talk about Communote, share your experiences and communicate the use of it. Explain the handling to your colleagues, but try to avoid too many terms that they would not understand. Introduce Communote to a broader audience and implement the new way of communication in the daily work processes.
7. Step: Expansion to new Topics and Projects
  Increase the use and the reach of Communote significantly by developing new topics and projects with Communote. Gain more multipliers, employees and departments in order to do so.
These 7 steps will help you to successfully implement Communote in your enterprise. Nevertheless, there are many more factors to be considered. Therefore we are happy to provide you with further advice.

### How can I search through the URL?

It is possible to search through the URL. You can search for notes, topics and people.

**Search notes**

* URL for all notes ``/microblog/<ClientId>/portal/home?<QueryString>``
* URL for notes by a person ``/microblog/<ClientId>/portal/users/<UserAlias>?<QueryString>``
* URL for notes to a topic ``/microblog/<ClientId>/portal/topics/<TopicAlias>?<QueryString>``
* parameter is ``noteSearchString``
* result shows notes that matches with the keyword
* results will be shown in the "all notes" tab
* you can add different keywords separated by spaces
Example: http://communote.com/microblog/global/portal/users/lisa?noteSearchString=communote

**Search topics**

* URL for the topic overview ``/microblog/<ClientId>/portal/topics?<QueryString>``
* parameter is ``topicSearchString``
* result shows topics that matches with the keyword in their names
* results will be shown in the topics overview
* you can add different keywords separated by spaces
Example: http://communote.com/microblog/global/portal/topics?topicSearchString=communote

**Search people**

* URL for the people overview ``/microblog/<ClientId>/portal/users?<QueryString>``
* parameter is ``userSearchString``
* result shows people that matches with the keyword in their names and/or alias
* results will be shown in the people overview
* you can add different keywords separated by spaces
Example: http://communote.com/microblog/global/portal/users?userSearchString=Christian

### How can I refer to a specific note?

You can refer to the note via a unique link. The link is located behind the time of the contribution.

## Developer Questions

Sorry there are no frequently asked questions here yet.

## Administration Questions

Sorry there are no frequently asked questions here yet.

## Your Question?

If you have a question write it into the comments and we will probably find an answer!
