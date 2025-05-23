from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class User(BaseModel):
    id: int
    name: str
    email: str
    created_at: datetime

class StudyGroupCreate(BaseModel):
    name: str
    description: Optional[str]
    creator_id: int
    tags: List[str]

class StudyGroup(StudyGroupCreate):
    id: int
    created_at: datetime