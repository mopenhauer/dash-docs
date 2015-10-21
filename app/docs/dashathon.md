---
title: DASHathon
---
## Introduction

On March 18, 2013, staff from the Office for Scholarly Communication gathered for a DASHathon: an all-day, office-wide event designed to both rethink our deposit workflow and to increase deposits into DASH.

The day started with an overview of the workflow for making DASH deposits. Particular focus was placed on working with bulk ingests of Harvard-authored articles from the PubMed Central Open Access Subset, as these are the most straightforward in terms of making license decisions and correcting metadata. Half of the OSC’s staff had deposited articles in DASH in the past, while the other half was new to the process. Staff who were less familiar with the process were developers that work directly with the back-end of DASH, Harvard's DSpace-based repository. This combination of experience made the day's work that much more valuable, as staff that worked on DASH deposits regularly were able to suggest updates or changes that developers were immediately able to see, experience, and address. Meanwhile, developers were often able to suggest workflow changes that were low-tech or no-tech, and which would help to speed processing time per article.

A bulk ingest from PubMed Central had already been established to bring open access articles authored by Harvard affiliates into DASH. Whereas articles submitted directly by Harvard faculty require a more intensive process of metadata entry and editing, bulk ingest articles rely on metadata provided by PubMed Central, leaving OSC staff to edit that metadata. Based on existing parameters we had set for the bulk ingest and established workflow procedures, article processing time for articles ingested from PubMed Central was between 10 and 15 minutes. The majority of that time was spent on two processes: using a search box to check author names against the Harvard directory, and changing mathematical and scientific symbols to MathJax to ensure proper display across systems and displays.

Every aspect of the workflow and technical specifications for the bulk ingest process was reviewed by OSC staff as they processed and deposited articles during the DASHathon. Staff worked through the article deposit workflow, depositing articles throughout the day. As an individual staff member came up with a possible change, the group discussed the change, considered whether or not a technical solution was required, and added agreed-upon changes to our list. Below is a list of both workflow and technical changes that were implemented following the all-day DASHathon.

## Workflow changes

### Math Markup

We are only adding MathJax for symbols or notations that are not rendering correctly, or for subscript and superscript text. Converting symbols and notations using MathJax was extremely time consuming; the elimination of this step saved several minutes of processing time per article. A tech fix was also implemented (see Technical Changes, below).

### Citations

We are no longer revising the citation for each article to ensure that the citation exactly matches Chicago Style. Our feeling was that there are many types of citation styles favored by DASH users, and that our attention and effort was better spent ensuring that the metadata was accurate (title, author, etc.), rather than focusing on formatting that metadata. Our bulk ingest parameters are set to automatically format citations using Chicago Style, so we will assume those parameters will format the citation accurately.

### DOI Links

We are no longer confirming the DOI or additional links to published versions. We agreed that, in our experience, these have been accurate and that the extra step is not warranted.

### Keywords

We decided to stop changing the case for keywords. Previously, if a keyword was in all caps, then staff manually changed the keyword to lower case. This became burdensome for articles with more than 10 keywords.

### Title Case

We decided to ignore title case in both the citation and title fields. The bulk ingest maintains the case used in the published version for the title field, and changes the title to lower case for the citation field. Previously, staff made sure that titles in the title field were in title case. Now staff are only changing proper nouns to uppercase in the citation field.

## Technical changes

### Metadata

#### Author Lookup

An improvement to the author lookup feature was already in development, but the amount of time the change would save was made clear to all staff members after using the existing author lookup feature during the DASHathon. The new feature has changed the icons representing a Harvard author vs. non-Harvard author to make author affiliations more clear to depositors; incorporates a drop-down arrow to open a search window, facilitating searching and decreasing the number of clicks needed to perform a search; and the number of clicks needed to select an author from a list of two or fewer names was also reduced.

For Harvard-affiliated authors with long titles, a hover feature was added to display the author’s full title when a staff member mouses over the author’s name during author lookup. The author lookup box was also expanded to accommodate longer titles.

#### OA Policy Date

The effective date of the open access policy for each school was added to the license selection page in the article deposit workflow. This gives depositors additional information at the point in the deposit process when that information is most needed. Eight Harvard schools have open access policies, each with a different effective date, making this a useful addition to the license selection page.

#### Title

The title field was moved to the top of the item submission page. An earlier feature had been added to perform a title match to check for duplicate articles in DASH; by moving the title field to the top of the item submission page, depositors will discover a potential duplicate title match in DASH before entering or checking any other metadata.

#### Edit Button

The “Edit Metadata” button was moved to the top of a series of buttons on the item submission landing page. This is the most frequently used button on the landing page, and moving it to the top of the series allows staff to access the button without having to scroll down the page.

#### Citation

The number of authors listed in the citation field is now truncated to the first 7 authors if 11 or more authors were responsible for an article. This automation is in keeping with Chicago Style, our default citation style, and ensures that the citation field does not become excessively long with the presence of dozens of authors.

#### Journal Title

If not present after the bulk ingest, or if incorrect, entering a serial title will now initiate an ISSN lookup and publisher name search, automatically filling in those fields with metadata from SherpaRomeo.

#### Math Markup

A MathJax preview was added, so that staff can see the effects of MathJax coding as they type. Previously staff had to wait until a final review page in the workflow to confirm that MathJax coding had rendered correctly.

#### Workflow Comments

A comment field was added to the item submission page. The comment field will allow staff to add notes about a submission - for example, a note might indicate that permission from a faculty member is needed to complete a deposit.

### Bulk Ingest

#### Article ID/Number

The article id, or article number, is automatically added to citations for articles brought in through a bulk ingest.

#### Keywords

A second keyword parameter was added to the bulk ingest to ensure that keywords are automatically added to the article’s metadata during ingest.

#### Version Type

Bulk ingest articles from PubMed Central will have the default version type set as “Version of Record.” All articles from the PubMed Central Open Access Subset ingest are published versions, so making this the default during ingest saves a step during the article deposit process.

#### Abstract

The bulk ingest parameters were set to recognize the headings within an abstract (“Background,” “Methods,” “Conclusion”) and to add a colon after each when displaying headings in the abstract field in DASH. In some cases a period was also being added; this was amended. Additional headings were also added to the bulk ingest parameters as there are many variations that were often integrated into the body of the abstract instead of being distinguished as headers.

## Logistics

Here are some suggestions for conducting your own Insert-Institutional-Repository-Name-Here-athon:

### Scheduling

Budget the entire morning for your workflow expert to give a tutorial to people who have never made a deposit. Allow experienced attendees to go ahead and make deposits during this time if they would like to.

This also becomes an opportunity for experienced workflow attendees to suggest updates and enhancements to printed and online documentation (enlist someone to record these suggestions).

Budget the afternoon for actual submissions. Take frequent breaks. Reward yourselves by going out for drinks at 4:30!

### Assigning Tasks

Come up with some method to assign submission tasks ahead of time. We used a Google spreadsheet to do this so that two or more people were not working on the same submission by accident.

### Seating

If possible, have experienced people sit next to less experienced people so that they can easily help answer questions throughout the day.

### Recording Ideas

Come up with a method to document all of the great ideas that will be generated. We used Google docs for this.

### Making Decisions

Ideally, you will have people participating that can make policy and workflow changes right then and there. We did this a couple of times.

### Food

Have lots of it (sweet, salty & healthy options).

### Two Weeks After

Plan to free up some resources for 2+ weeks after this event to immediately implement enhancements (both technical and non-technical). It will be very rewarding to everyone involved in this to see quick and meaningful results.

## Summary

Implementation of both workflow and technical changes took about four weeks from the date of the DASHathon. Workflow changes were implemented immediately, while technical changes were implemented as the developers completed each change. Once all changes were in place, the improvement in processing time was immediately apparent. Where previously processing time per bulk ingest article could take between 10 and 15 minutes, processing time now takes 3-5 minutes per article. This improvement is due to the marriage of simple, non-technical workflow decisions with more complex technical changes that helped minimize clicks and navigation during article processing. The two most laborious steps in the workflow, the author lookup and manual entry of MathJax, were resolved with a combination of workflow and technical changes; this combination made a significant reduction in article processing time.

On the day of the DASHathon we deposited 165 articles; since March and the implementation of both technical and workflow changes we are averaging 1000 deposits per month, a marked increase over previous monthly averages.

The success of this first DASHathon has encouraged the OSC to continue this effort as a series, which we will use to assess and improve the workflow, policy, and technology that underlies the opening of Harvard scholarship.
