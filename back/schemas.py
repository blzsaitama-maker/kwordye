"""
Schemas for the Manga API.

This module defines the Pydantic models used for data validation,
serialization, and documentation of the API endpoints.
"""
from datetime import date, datetime
from enum import Enum
from typing import List

from pydantic import BaseModel, ConfigDict, HttpUrl


class MangaStatus(str, Enum):
    """Enum for manga status."""

    ONGOING = "EM ANDAMENTO"
    COMPLETED = "COMPLETO"
    HIATUS = "HIATO"


class ChapterSchema(BaseModel):
    """Represents a chapter of a manga."""

    model_config = ConfigDict(from_attributes=True)

    chapter_number: int
    title: str = "TBD"
    page_count: int
    reading_url: HttpUrl


class MangaSchema(BaseModel):
    """Represents a manga series."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    author: str
    genre: str
    tags: List[str]
    synopsis: str
    cover_image_url: HttpUrl
    status: MangaStatus
    release_date: date
    updated_at: datetime
    chapters: List[ChapterSchema]
