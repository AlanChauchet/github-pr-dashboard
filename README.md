# PR Dashboard

Follow your team's PRs status

## How it works

This dashboard will automatically fetch inside the selected repositories of your organisation:
- PRs authored by the selected users
- PRs where a review of a user is requested
- Filter out PRs with the selected tags (i.e WIP)
- Automatically scroll down the list of PRs

PRs are displayed differently depending on their age:
- New PRs have a `new` badge when they are less than {hoursUntilNotNew} old
- {daysBeforeWarning} day old PRs are displayed in orange
- {daysBeforeCritical} day old PRs are displayed in red

Mergeable PRs are displayed in green, no matter their age.

PRs which does not require additional review can be filtered 

PRs are ordered from oldest to newest and are clickable.

## Configuration

| URL param | description | default value |
|---|---|---|
| token | [the github token used to make the requests](#how-to-get-a-github-token) | none |
| users | comma separated list of usernames you wish to follow | none |
| teams | comma separated list of teams you wish to follow | none |
| repositories | comma separated list of repositories names you wish to follow | none |
| filters | comma separated list of tags you wish to exclude from the dashboard | none |
| daysBeforeWarning | number of days before a PR turns into "warning" (orange) | 1 |
| daysBeforeCritical | number of days before a PR turns into "critical" (red) | 2 |
| hoursUntilNotNew | number of hours before a PR does not have the `new` badge anymore | 2 |
| minNbReviews | number of PR validations required to be considered mergeable | 2 |
| onlyNotReviewed | display only PR which lacks required number of validations | true |
| autoScroll | enable the auto-sroll or not (use it to display on a TV) | false |

Example: https://github.io/pr-dashboard/?token=YOUR_PERSONAL_TOKEN&organisation=myorg&users=AlanChauchet,otherUser&repositories=myRepo,anotherRepo&filters=Stand%20by,WIP&autoScroll=true

### How to get a github token

Head to your [Github personal access tokens page](https://github.com/settings/tokens) and generate a new one.
