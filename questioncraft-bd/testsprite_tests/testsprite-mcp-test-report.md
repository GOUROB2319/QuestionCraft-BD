# TestSprite AI Testing Report (QuestionCraft-BD)

## 1️⃣ Document Metadata
- **Project Name:** QuestionCraft-BD
- **Date:** 2026-03-06
- **Prepared by:** Antigravity AI assistant
- **Test Scope:** Frontend (Codebase)
- **Total Tests:** 30
- **Passed:** 12
- **Failed:** 18

## 2️⃣ Requirement Validation Summary

### User Authentication
| Test ID | Title | Status | Analysis / Findings |
|---------|-------|--------|---------------------|
| TC001 | Register a new user and reach verification page | ❌ Failed | Terms checkbox and Confirm Password field issues blocked registration. Navigation to /verify did not occur. |
| TC002 | Register with existing email and short password | ✅ Passed | Validation errors for existing email and short password worked as expected. |
| TC003 | Registration requires accepting Terms | ❌ Failed | Terms checkbox not found on the page, preventing verification of this rule. |
| TC010 | Invalid login does not allow access | ✅ Passed | Incorrect credentials correctly blocked access to the dashboard. |

### Question Dashboard
| Test ID | Title | Status | Analysis / Findings |
|---------|-------|--------|---------------------|
| TC004 | Dashboard loads for authenticated user | ✅ Passed | Welcome area and overview cards are visible on successful login. |
| TC005 | Quick action 'নতুন প্রশ্নপত্র তৈরি করুন' works | ✅ Passed | Correctly navigates to the question creation route. |
| TC006 | Sidebar 'প্রশ্ন ব্যাংক' navigation | ❌ Failed | Sidebar link 'প্রশ্ন ব্যাংক' was not found or had a different label, blocking navigation. |
| TC007 | Sidebar 'Papers' list navigation | ✅ Passed | Sidebar link for Papers correctly navigates to the papers list. |
| TC009 | Recent activity section visibility | ✅ Passed | The recent activity area renders without errors. |

### Question Creation & Management
| Test ID | Title | Status | Analysis / Findings |
|---------|-------|--------|---------------------|
| TC012 | Create/Save Bengali MCQ + Preview | ✅ Passed | Successfully created an MCQ with Bengali text and verified the live preview. |
| TC013 | Validation: Empty question text | ✅ Passed | Correctly blocked saving when question text was empty. |
| TC014 | Create Bengali Short question | ❌ Failed | Navigation to Step 2 was blocked; clicking 'পরবর্তী ধাপ' redirected to dashboard. |
| TC017 | Add second question + Save Draft | ❌ Failed | Redirected to dashboard instead of showing 'Draft saved' confirmation. |
| TC020 | Search/Filter questions | ❌ Failed | Questions list not found on /questions/create; redirection issue prevented reaching the list. |
| TC021 | Search results update on keyword | ❌ Failed | Global search did not produce visible results; navigation to list failed. |
| TC024 | Edit a question from Papers list | ❌ Failed | Editor did not open, and no papers were found to edit in the current state. |
| TC025 | Edit question + Toast confirmation | ❌ Failed | No question cards found on dashboard to initiate the edit action. |
| TC026 | Delete a question + Confirmation | ❌ Failed | No deletable items found on the dashboard. |

### Paper Builder & Preview
| Test ID | Title | Status | Analysis / Findings |
|---------|-------|--------|---------------------|
| TC027 | Create paper + A4 Preview | ✅ Passed | Successfully opened A4 preview with standard headers. |
| TC028 | Set paper metadata (Title, Marks, etc.) | ✅ Passed | Metadata fields correctly updated and saved. |
| TC029 | Preview shows header & sections | ❌ Failed | Created paper was not found in the list, preventing preview verification. |
| TC031 | Validation: Blank title | ❌ Failed | Saving as draft was permitted even with a blank title, contrary to expectations. |
| TC032 | Validation: Blank title blocks export | ✅ Passed | Export was correctly blocked when the title was missing. |

### Settings
| Test ID | Title | Status | Analysis / Findings |
|---------|-------|--------|---------------------|
| TC035 | Update institution in Settings | ✅ Passed | Successfully updated and saved institution details. |
| TC037 | Change password successfully | ❌ Failed | No success confirmation message was visible after the update attempt. |
| TC038 | Change password: Wrong current pass | ❌ Failed | Expected error 'Current password incorrect' was not displayed. |

### AI Features
| Test ID | Title | Status | Analysis / Findings |
|---------|-------|--------|---------------------|
| TC042 | Generate AI questions to Bank | ❌ Failed | 'AI দিয়ে তৈরি করুন' action was missing from the creation page. |
| TC043 | Generate AI questions to Paper | ❌ Failed | AI generation entry point not found in the question creation workflow. |
| TC047 | AI: Add to bank success notification | ❌ Failed | AI UI controls were absent, preventing verification of this notification. |
| TC048 | AI: Add to paper success notification | ❌ Failed | AI generation controls were not present on the visible UI. |

## 3️⃣ Coverage & Matching Metrics

- **Pass Rate:** 40.00% (12/30)
- **Top Successes:** Core dashboard navigation, MCQ creation, Metadata management, Settings update.
- **Top Failures:** Registration UI mismatches (Terms/Confirm password), AI entry points, Navigation redirections, Missing state for list-based actions.

| Category | Total Tests | ✅ Passed | ❌ Failed |
|----------|-------------|-----------|-----------|
| User Authentication | 4 | 2 | 2 |
| Question Dashboard | 5 | 4 | 1 |
| Question Creation & Management | 9 | 2 | 7 |
| Paper Builder & Preview | 5 | 3 | 2 |
| Settings | 3 | 1 | 2 |
| AI Features | 4 | 0 | 4 |

## 4️⃣ Key Gaps / Risks
- **UI Element Consistency:** Multiple tests failed due to missing checkboxes (Terms), labels (প্রশ্ন ব্যাংক), or buttons (AI generation). This suggests the test plan might be using outdated labels or the UI has changed.
- **Navigation Flow Redirection:** Several "Next Step" buttons redirected users to the dashboard instead of the intended next page, pointing to potential routing bugs in the multi-step forms.
- **AI Feature Accessibility:** All AI-related tests failed because the entry points were not found. This indicates either the feature is not yet fully integrated or it's gated behind specific conditions not met during the test.
- **State Management for Tests:** Tests targeting list-based views (Questions list, Papers list) failed because no data existed. Tests should ideally be more atomic or ensure data creation happens within the same session.
- **Negative Validation Messages:** Success and error toasts/messages (e.g., password updates) are often missing or use different text than expected by the tests.
